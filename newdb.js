const mongoose = require("mongoose");

const mongoURL = 'mongodb://localhost:27017/usersData';

mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("connection", () => {
    console.log("Connected to mongoDB");
})

db.on("error", () => {
    console.log(error)
})

db.on("disconnected", () => {
    console.log("Disconnected to mongoDB")
})

module.exports = db;

