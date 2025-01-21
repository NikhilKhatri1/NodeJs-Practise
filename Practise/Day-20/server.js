/**
 * Node Modules
 */
const express = require('express');
const connectDb = require('./database/db');
require('dotenv').config();
const cors = require('cors');
const { bookRoute } = require('./routes/bookRoutes');

/**
 * Using express as app
 */
const app = express();

/**
 * Importing Port from .env
 */
const port = process.env.Port;

/**
 * Converting Data in JSON Format
 */
app.use(express.json());

/**
 * Cors to Connect with Client
 */
app.use(cors({
    origin: 'http://localhost:5173',
    methods: '*'
}));

/**
 * Connecting to DB
 */
connectDb();

/**
 * Http Method
 */
app.get('/', (req, res) => {
    res.send('Home');
});

/**
 * Routes
 */

app.use('/api', bookRoute);

/**
 * Server Listen
 */
app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
})