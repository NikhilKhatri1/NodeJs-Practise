const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        const dbResponse = await mongoose.connect(process.env.MONGODB_URL);
        if (!dbResponse) throw new Error("Failed to connect.");
        console.log("Connected to database.")
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = connectDB;