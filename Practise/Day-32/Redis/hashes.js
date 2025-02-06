const redis = require('redis');

const client = redis.createClient({
    host: "localhost",
    port: 6379
});

client.on('error', (error) => {
    console.log('Redis error ', error)
});

const hashing = async () => {
    try {
        // create Connection using Redise
        client.connect();
        console.log('Connected to Redis');

        // hash ->




    } catch (error) {
        console.error(error);
    } finally {
        console.log('Redis connection Disconnected');
        client.quit();
    }
}

hashing();