// Import Files/Libraries
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const MONGODB_CONNECTION = require("./database/db.js")

const PORT = process.env.PORT;
// using variable "app" to have functionality of express;
const app = express();

// to convert everything in json format
app.use(express.json());

app.use(cors({
    origin: ""
}))


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})

