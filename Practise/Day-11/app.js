const express = require("express")

const app = express();

// Middleware

app.use(express.json())


let books = [
    { id: 1, title: 'book 1' },
    { id: 2, title: 'book 2' },
    { id: 3, title: 'book 3' },
    { id: 4, title: 'book 4' }
];

