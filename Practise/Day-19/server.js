const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./database/db.js");
const userRouter = require("./routes/userRoutes.js");


const PORT = process.env.PORT;

const app = express();

app.use(cors({
    origin: process.env.frontend_URL
}))

app.use(express.json());

connectDB();


app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})