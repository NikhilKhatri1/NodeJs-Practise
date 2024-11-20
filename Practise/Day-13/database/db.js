const mongoose = require("mongoose")
require('dotenv').config()
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database is Connected");
        
    } catch (error) {
        console.log('Mongo DB Connection failed : ', error);
        process.exit(1)
    }
}


module.exports = connectDB