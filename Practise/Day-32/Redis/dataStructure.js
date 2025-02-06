
const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379
});


// error listener
client.on("error", (error) => {
    console.log('Redis Client  error occured!', error);
});


async function RedisDataStructure() {
    try {
        // create connection to client
        await client.connect();

        // String Get,Set,mset,mget
        await client.set("user:name", "john");
        const getName = await client.get("user:name");
        console.log("Name = ", getName);

        // create multiple key and value
        await client.mSet(["user:email", "john@gmail.com", "user:age", "30", "user:country", "India"]);
        // destructuring
        const [email, age, country] = await client.mGet(["user:email", "user:age", "user:country"]);
        console.log(`Email = ${email}, Age = ${age}, Country = ${country}`);

        // List -> Lpush(add element from start), Rpush(Add Element from end),
        //         Lrange(retrieve element from the specific element from list)
        //         LPOP(Remove and return start element)
        //         RPOP(Remove and return end Element)

        // await client.lPush("notes", ["note 1", "note 2", "note 3"]);
        // get value using lRange("key",startIndex,endIndex);
        const extractNotes = await client.lRange("notes", 0, -1);
        console.log("Notes values = ", extractNotes);
        // delete the key(notes) bcz its incrmentting every execution...
        // await client.del("notes");
        // pop First Element from list
        const PopFirstNote = await client.lPop("notes");
        console.log("Pop first Note = ", PopFirstNote);
        // dispplay all remaining element
        const RemainingNotes = await client.lRange("notes", 0, -1);
        console.log("Remaining Elements = ", RemainingNotes);
    } catch (e) {
        console.error(e)

    } finally {
        client.quit();
    }
}

RedisDataStructure();