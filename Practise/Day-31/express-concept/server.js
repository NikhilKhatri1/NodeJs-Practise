require('dotenv').config();
const express = require('express');
const { requestLogger, addTimeStamp } = require('./middleware/customMiddleware');
const { globalErrorHandler } = require('./middleware/errorHandler.js');
const { urlVersioning } = require('./middleware/apiVersioning');
const createBasicRateLimiter = require('./middleware/rateLimiter');
const itemRoutes = require('./routes/item-routes.js');
const configureCors = require('./config/corsConfig.js');

const app = express();

const PORT = process.env.PORT || 4040;

// custom-middleware
app.use(requestLogger);
app.use(addTimeStamp);

// express middleware
app.use(configureCors());

// rate limiter in api
app.use(createBasicRateLimiter(100, 15 * 60 * 1000));   // for 15 min


// parsing json

app.use(express.json());


// api versioning
app.use(urlVersioning('v1'));
app.use('/api/v1', itemRoutes);

// handle error
app.use(globalErrorHandler);





app.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`)
});