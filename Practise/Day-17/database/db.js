const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB")

    } catch (error) {
        console.log("Failed to connect DB", error);
        process.exit(1)
    }
}

module.exports = connectDB;
