const express = require("express");
const connectDB = require("./database/db");
const userRoutes = require("./routes/userRoutes.js");
require("dotenv").config();
const cors = require("cors");


const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "http://localhost:3000"
}));

connectDB();

app.use(express.json());

app.use('/api/user', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is started at http://localhost:${PORT}`);
});