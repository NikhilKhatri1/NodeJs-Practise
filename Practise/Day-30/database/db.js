const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_url)
        console.log(`Connected to DB`)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


module.exports = connectDB