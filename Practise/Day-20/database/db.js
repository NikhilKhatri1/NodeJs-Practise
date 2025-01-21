/**
 * Node Module
 */
const mongoose = require('mongoose');
require('dotenv').config();

/**
 * Connecting to MONGODB
 */
const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.mongo_url);
        console.log('Connected to mongodb')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

/**
 * Importing Function
 */
module.exports = connectDb;