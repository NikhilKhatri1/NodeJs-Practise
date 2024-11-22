require("dotenv").config();
const express = require("express");
const connectDB = require('./database/db.js')
const authRouter = require('./routes/userAuthRouter.js')
const PORT = process.env.PORT || 3000;

connectDB();

const app = express();

// middlewares
app.use(express.json());

app.use('/api/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})