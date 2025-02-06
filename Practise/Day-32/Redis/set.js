const redis = require("redis");

const client = redis.createClient({
    host: "localhost",
    port: 6379,
});

client.on("error", (error) => {
    console.log('Redis Client  error occured!', error)
});

async function SetInRedis() {
    try {
        await client.connect();
        console.log('Connected to redis');

        // sets -> SADD, SMEMBERS, SISMEMBER, SREM
        // SADD-> used to add one or more element in 'set'
        // SMEMBERs-> used to retrieve all element in 'set'
        // SISMEMBER-> used to find element is present in 'set'
        // SREM-> used to remove one or more element in 'set'

        // SADD
        await client.sAdd('user:nickName', ['john', 'alice', 'bob']);
        // SMEMBERS
        const extractuserNickName = await client.sMembers("user:nickName");
        console.log("Set = ", extractuserNickName);
        // SISMEMBER
        const isAliceExist = await client.sIsMember("user:nickName", "alice");
        console.log("is Exist = ", isAliceExist);
        // SREM
        await client.sRem("user:nickName", "bob");
        // updated Sets
        const updatedusernicName = await client.sMembers("user:nickName");
        console.log(updatedusernicName);
        
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Redis Connection end');
        client.quit();
    }
}

SetInRedis();