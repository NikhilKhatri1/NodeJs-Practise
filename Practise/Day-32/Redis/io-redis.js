const Redis = require('ioredis');

// redis client library for node js

const redis = new Redis();

async function ioRedis() {
    try {
        await redis.set('key', 'value');
        const val = await redis.get("key");
        console.log(val);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Redis connection End");
        redis.quit();
    }
}

ioRedis();