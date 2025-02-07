const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
});

client.on("error", (error) => {
    console.error("Error on Redis Connection Occured", error);
});

async function RedisPipeleSpeedtest() {
    try {
        //create connection
        await client.connect();
        console.log("Connected to redis Server");;

        console.log("Performance Test");

        // without Pipeline connection
        console.time("Without Pipeline");
        for (let i = 0; i < 1000; i++){
            await client.set(`user_key: ${i}`, `user_value: ${i}`);
        }

        console.timeEnd("Without Pipeline");

        // with pipeline
        console.time("With Pipeline");

        const pipeline_user = client.multi();

        for (let i = 0; i < 1000; i++){
            pipeline_user.set(`user_pipeline_key: ${i}`, `user_pipeline_value: ${i}`);
        }

        await pipeline_user.exec();

        console.timeEnd("With Pipeline");
        
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Redis Connection End");
        client.quit();
    }
}


RedisPipeleSpeedtest();