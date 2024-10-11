const express = require('express');
const app = express();
const person = require('./Models/newPerson');
const db = require('./newdb');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/person', (req, res) => {
    res.send("this is Person Detail");
})
app.get('/menu', (req, res) => {
    res.send("menu Detail");
})

app.post('/person', (req, res) => {
    const data = req.body;
    const newPerson = new person(data);

    res.send("Data is Saved");
    console.log("Data is Saved")
})
app.listen(5000, () => {
    console.log("Server is Ready at http://localhost:5000")
});