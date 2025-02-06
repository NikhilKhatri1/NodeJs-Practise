

const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379
});


// error listener
client.on("error", (error) => {
    console.log('Redis Client  error occured!', error);
});


async function redisConnection() {
    try {
        await client.connect();
        console.log('Connected to redis');
        // set value in key and value pair
        await client.set("name", "john");
        // get value using key
        const extractValue = await client.get("name");
        console.log("Get name = ", extractValue);
        //delete value using key (del)
        // it gives delete count value
        const deleteValue = await client.del("name");
        console.log("Delete Count = ", deleteValue);
        // check if deleted-> null
        const extractUpdatedValue = await client.get("name");
        console.log("Updated Value = ", extractUpdatedValue);

        // Arithmetis Operator
        await client.set("count", 100);

        // Increment operator
        const incrementCount = await client.incr("count");
        console.log("increment count = ", incrementCount);
        // Decrement operator
        const decrementCount = await client.decr("count");
        console.log("Decrement Count = ", decrementCount);

    } catch (error) {
        console.error(error);
    } finally {
        await client.quit();
        console.log('Connection Closed')
    }
}


redisConnection();