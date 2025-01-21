/**
 * Node_module
 */
const express = require('express');
const { addBook, viewBook, viewBooks, updateBook, deleteBook } = require('../controllers/bookController');

const bookRoute = express.Router();

// add book
bookRoute.post('/addbook', addBook);

// Route for viewing all books
bookRoute.get('/books', viewBooks);

// Route for viewing a single book by its ID
bookRoute.get('/books/:id', viewBook);

// route for updating the book
bookRoute.put('/books/updateBook/:id', updateBook);

//route for Deleting the book
bookRoute.delete('/books/deleteBook/:id', deleteBook);

module.exports = {
    bookRoute
}
