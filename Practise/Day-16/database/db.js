const mongoose = require("mongoose");
require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB is connected successfully')
    } catch (error) {
        console.log('MongoDB failed to connect')
        process.exit(1)
    }
}


module.exports = connectDb;