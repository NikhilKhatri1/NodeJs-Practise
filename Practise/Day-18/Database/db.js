const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        if (connect) {
            console.log("Connected to Database");
        }
    } catch (error) {
        console.log("Error in Connection", error);
    }
}


module.exports = connectDB;