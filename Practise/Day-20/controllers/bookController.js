// controllers/bookController.js

const book = require('../model/bookModel.js');

const addBook = async (req, res) => {
    const { title, author, publicationDate, genre, price, description } = req.body;
    try {
        const isBookExist = await book.findOne({ $or: [{ title }, { author }] });
        if (isBookExist) {
            console.log("user already existed");
            return res.status(409).json({ success: false, message: "Book Already Exist" });
        }
        const newBook = new book({
            title,
            author,
            publicationDate,
            genre,
            price,
            description
        })
        const saveBook = await newBook.save();
        res.status(201).json({ success: true, message: saveBook });
    } catch (error) {
        console.error("Error saving book:", error);
        res.status(500).json({ success: false, message: "Error saving book", error: error.message });
    }
}

// View all books
const viewBooks = async (req, res) => {
    try {
        const books = await book.find();  // Retrieve all books from the database
        res.status(200).json({ success: true, message: books });
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ success: false, message: "Error fetching books", error: error.message });
    }
};

// View a single book by its ID
const viewBook = async (req, res) => {
    // Get the book ID from the request parameters
    const { id } = req.params;
    try {
        // Find a book by its ID
        const Book = await book.findById(id);
        if (!Book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json({ success: true, message: Book });
    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json({ success: false, message: "Error fetching book", error: error.message });
    }
};



module.exports = {
    addBook,
    viewBooks,
    viewBook
}