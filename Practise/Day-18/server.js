const express = require("express");
require("dotenv").config();
const connectDB = require("./Database/db.js");
const productsRoutes = require('./routes/productsRoutes.js')
// connect to DB
connectDB();

// port
const PORT = process.env.PORT;

// using app as express
const app = express();

// use Middleware
app.use(express.json());

app.use('/api/detail', productsRoutes);

app.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`)
})