const redis = require("redis");

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
});

client.on('error', (error) => {
    console.log('Error in Redis Occured ', error);
});


async function pipeliningTransactions(params) {
    try {
        // Create Connection
        await client.connect();
        console.log("Connected to redis");

        // pipe lining and transactions
        // pipelining -> to send multiple command in a batch in redis server
        // transaction -> allow multiple command to be executed 

        // transaction
        const multi = client.multi();
        // set multiple key and value
        multi.set("key-transaction1", "value 1");
        multi.set("key-transaction2", "value 2");
        // get value using key
        multi.get("key-transaction1");
        multi.get("key-transaction2");

        // execute all results (use await)
        const results = await multi.exec();
        console.log("Transaction = ", results);

        // pipelining allow you to send multiple request in a single go without waiting(it reduce the time);

        const pipeline = client.multi();
        pipeline.set("key-pipeline1", "value 1");
        pipeline.set("key-pipeline2", "value 2");
        pipeline.get("key-pipeline1");
        pipeline.get("key-pipeline2");

        const pipelineResults = await pipeline.exec();
        console.log("Pipeline = ", pipelineResults);

        // batch operation ->

        const pipelineOne = client.multi();
        for (let i = 0; i < 100; i++) {
            pipelineOne.set(`User : ${i}`, ` Action ${i}`);
        }
        await pipelineOne.exec();
        console.log(pipelineOne);

    } catch (error) {
        console.log(error);
    } finally {
        console.log("Redis Connection End");
        client.quit();
    }
}



pipeliningTransactions();