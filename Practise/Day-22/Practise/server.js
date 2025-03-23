const express = require("express");
require("dotenv").config();

const app = express();

// Data in Json Format
app.use(express.json());
// PORT Setup
const PORT = process.env.PORT;
// Database Connection 
const connectDb = require("./db/db.js");
connectDb();

app.get("/", (req, res) => {
    res.send("Home");
});


app.listen(PORT, () => {
    console.log(`Server is Started http://localhost:${PORT}`)
})