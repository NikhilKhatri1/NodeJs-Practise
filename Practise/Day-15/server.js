const express = require("express");
require("dotenv").config();
const connectDB = require('./database/db')

const PORT = process.env.PORT

connectDB();

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.listen(PORT, () => {
    console.log(`server is ready at http://localhost:${PORT} `)
})