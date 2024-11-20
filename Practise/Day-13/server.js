const express = require("express");
const dotenv = require('dotenv').config()
const app = express();
const connectDB = require('./database/db.js')
const PORT = process.env.PORT || 4040
const bookRoutes = require('./routes/bookRoutes.js')

// connect to db
connectDB();

// middleware ->express.json()

app.use(express.json())


// router here

app.use('/api/books', bookRoutes)


app.get('/', (req, res) => {
    res.json({ message: "Home Page" });
})



app.listen(PORT, () => {
    console.log(`Server started at http://localhost/${PORT}`)
})


