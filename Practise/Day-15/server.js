const express = require("express");
require("dotenv").config();
const connectDB = require('./database/db')
const userRouter = require('./routes/userRoute.js')

const PORT = process.env.PORT

connectDB();

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`server is ready at http://localhost:${PORT} `)
})