const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Server is connected");
    } catch (error) {
        console.log("Sever is not connected", error)
        process.exit(1)
    }
}


module.exports = connectDB