const express = require('express');

const App = express();

const db = require('./db');

require('dotenv').config();

const passport = require('./Auth');

const bodyParser = require('body-parser');
App.use(bodyParser.json()) // req.body


// middleware function

const logRequest = (req, res, next) => {
    // console.log(`[${new Date().toLocaleDateString()}] Request Mode to ${req.originalUrl}`)
    next();  // move on to next phase
}

// passport initialize

App.use(passport.initialize());

//create auth
const localAuthMiddleware = passport.authenticate('local', { session: false });

// , logRequest you can use inside get 

App.get('/', function (req, res) {
    res.send('Hello World')
})

// to use in every Routes
App.use(logRequest);




// person Router
const personRoutes = require('./Routes/personRoutes');
App.use('/person', personRoutes)



// menu Router
const menuItem = require('./Routes/menuRoutes');
App.use('/menu', menuItem)


const PORT = process.env.PORT || 4000;

App.listen(PORT, () => {
    console.log('Server is run in http://localhost:4000')
})
