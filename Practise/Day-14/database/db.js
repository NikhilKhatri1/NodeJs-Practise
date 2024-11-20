const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Database is connected....')

    } catch (error) {
        console.log("Error in Connectivity : ", error.message)
        process.exit(1)
    }
}

module.exports = connectDb;