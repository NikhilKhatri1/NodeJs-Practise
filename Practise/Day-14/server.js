// Import files
const express = require('express');
const connectDb = require('./database/db.js')
const userRoute = require('./routes/userRoute.js');
require("dotenv").config()

// Connectivity
const app = express();
connectDb();

// PORT Import
const PORT = process.env.PORT;

//parse data in json
app.use(express.json())

app.use('/users', userRoute);

app.use('/', (req, res) => {
    res.json({ message: 'HomePage' })
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});