const express = require("express");
const app = express();

const myFirstMiddleware = (req, res, next) => {
    console.log("This first middleware will run on every request");

    next();
};

app.use(myFirstMiddleware)

app.get('/', (req, res) => {
    res.send("Home Page")
});

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.listen(4000, () => {
    console.log("server started at http://localhost:4000")
})