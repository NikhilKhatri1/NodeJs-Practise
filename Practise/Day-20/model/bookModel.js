// model/bookModel.js
/**
 * Importing Modules
 */
const mongoose = require('mongoose');

// Define the schema for the book model
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: Date,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

// Create a model based on the schema
const book = mongoose.model('book', bookSchema);

module.exports = book;
