require('dotenv').config();
const express = require('express');
const { configureCors } = require('./config/corsConfig');
const { requestLogger, addTimeStamp } = require('./middleware/customMiddleware');
const { globalErrorHandle } = require('./middleware/errorHandler')


const app = express();

const PORT = process.env.PORT || 4040;

// custom-middleware
app.use(requestLogger);
app.use(addTimeStamp);

// express middleware
app.use(configureCors());
app.use(express.json());

app.use(globalErrorHandle);

app.get('/', (req, res) => {
    res.send('Welcome to Advance Nodejs Concept')
});





app.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`)
});