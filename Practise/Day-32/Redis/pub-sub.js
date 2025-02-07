// pub-sub
// it is a messaging pattern (publishing the Message);
// publisher -> send (message)-> channel -> subscriber (Consume the message)


const redis = require('redis');

const client = redis.createClient({
    host: "localhost",
    port: 6379,
});

client.on("error", (error) => {
    console.error("Redis Client error Occured ", error);
});

async function PubSub() {
    try {
        // create Connection
        await client.connect();    // act as a publisher
        console.log("Connected to redis ");

        // create the subscriber of publisher
        // create a new client || Share the same connection
        const subscriber = client.duplicate();
        // create subscriber connection
        await subscriber.connect();
        // create channel
        await subscriber.subscribe("Dummy-Channel", (message, channel) => {
            console.log(`Recieve Message From ${channel} : ${message}`);
        });

        // publish message to dummychannel
        await client.publish("Dummy-Channel", "Some Dummy message from Publisher");
        await client.publish("Dummy-Channel", "Some More Dummy message Again from Publisher");
        // create delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // unsubscribe after completion
        await subscriber.unsubscribe();
        // end Connection
        await subscriber.quit();

        
        

    } catch (error) {
        console.log(error)
    } finally {
        console.log("redis Connection End");
        client.quit();
    }
}

PubSub();