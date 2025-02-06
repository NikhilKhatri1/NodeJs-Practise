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

        // hashes -> HSET, HGET, HGETALL, HDEL
        // HSET -> set the multiple values
        // HGET -> to get the value
        // HGETALL -> to get all the value
        // HDEL -> to delete the value

        await client.hSet("Product:1", {
            name: 'Product 1',
            description: 'Description of Product',
            rating: 5,
        });
        // particular detail of product
        const getProductRating = await client.hGet("Product:1", "rating");
        console.log("Rating of Product = ", getProductRating);
        //all details of product
        const getAllDetail = await client.hGetAll("Product:1");
        console.log("All Detail of Product = ", getAllDetail);
        // delete the detail of product
        const deleteDetail = await client.hDel("Product:1", "rating");
        console.log("No. of Delete Detail = ", deleteDetail);
        // updated Detail
        console.log("Updated detail = ", await client.hGetAll("Product:1"));


    } catch (error) {
        console.error(error);
    } finally {
        console.log('Redis connection Disconnected');
        client.quit();
    }
}

hashing();