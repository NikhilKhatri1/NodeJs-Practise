/**
 * Node_module
 */
const express = require('express');
const { addBook, viewBook, viewBooks } = require('../controllers/bookController');

const bookRoute = express.Router();

// add book
bookRoute.post('/addbook', addBook);

// Route for viewing all books
bookRoute.get('/books', viewBooks);

// Route for viewing a single book by its ID
bookRoute.get('/books/:id', viewBook);

module.exports = {
    bookRoute
}
