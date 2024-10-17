const express = require("express");
const bodyParser = require("body-parser");
// require("dotenv").config();

const app = express();
app.use(bodyParser.json());  // req.body

const PORT = process.env.PORT || 4000;


app.get("/signup", (req, res) => {
    res.send("Hello world")
})


app.listen(PORT, () => {
    console.log("Server is Ready at http://localhost:4000");
});