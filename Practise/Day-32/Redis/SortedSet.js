const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', (error) => {
    console.error('Handling Error in redis')
});

async function SortedSet() {
    try {
        client.connect();
        console.log('Connected to Redis');

        // Sorted Set -> ZADD, ZRANGE, ZRANK, ZREM
        // ZADD -> add element with score in sorted set
        // zRANGE -> retrieve element from set
        // ZRANK -> give rank or position of the specific element in the sorted set
        // ZREM -> to remove one or more element from the sorted set

        await client.zAdd('cart', [
            {
                score: 10, value: 'cart 1'
            },
            {
                score: 20, value: 'cart 2'
            },
            {
                score: 5, value: 'cart 3'
            },
        ])
        // retrieve element in asending order
        const getCartItems = await client.zRange("cart", 0, -1);
        console.log("ALL Items = ", getCartItems);
        // retrieve elemnt with score value
        const getCartItemWithScore = await client.zRangeWithScores("cart", 0, -1);
        console.log("All Items with Score = ", getCartItemWithScore);
        // Retrieve Particular element using ZRANK
        const getCartItem = await client.zRank("cart", "cart 2");
        // return position / index  // 2
        console.log("Particular Item = ", getCartItem);
        
    } catch (error) {
        console.log('Error in Redis ', error)
    } finally {
        console.log('Redis connection end');
        client.quit();
    }
}

SortedSet();