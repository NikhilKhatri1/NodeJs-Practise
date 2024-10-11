const mongoose = require('mongoose');

// Define the MongoDB connection URL
// const mongoUrl = 'mongodb://localhost:27017/hotels'; // Correct protocol

//cloud DB
// const mongoUrl = 'mongodb+srv://Practise:Dz%22my%2BYm6cG%5D34-@hotels.ldcoo.mongodb.net/?retryWrites=true&w=majority&appName=Hotels';

// dotEnv
require('dotenv').config();

const mongoUrl = process.env.MONGODB_url;

// Set up MongoDB connection without deprecated options
mongoose.connect(mongoUrl, {
    // The following options are no longer needed and can be removed:
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

// Get default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log("Connected to MongoDB server");
});
db.on('error', (err) => {
    console.log('MongoDB Connection Failed: ', err);
});
db.on('disconnected', () => {
    console.log('MongoDB Disconnected');
});

// Export the DB connection
module.exports = db;
