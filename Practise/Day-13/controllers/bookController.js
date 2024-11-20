
const Book = require('../models/book.js')



const getAllBooks = async (req, res) => {
    try {

        const allBooks = await Book.find({});
        if (allBooks?.length > 0) {
            res.status(200).json({ success: true, message: 'List of books are fetched successfully', data: allBooks })
        } else {
            res.status(404).json({ success: false, message: 'No Books found' })
        }

    } catch (error) {
        console.log("error in Geting Books", error)
        res.status(500).json({ success: false, message: 'Something went wrong! Please try Again' })
    }
}

const getBook = async (req, res) => {
    try {
        const getCurrentBookId = req.params.id;
        const bookDetailsById = await Book.findById(getCurrentBookId)
        if (!bookDetailsById) {
            return res.status(404).json({ success: false, message: "invalid Id" })
            ';'
        } else {
            res.status(200).json({ success: true, data: bookDetailsById })
        }
    } catch (error) {
        console.log("error in Geting Books", error)
        res.status(500).json({ success: false, message: 'Something went wrong! Please try Again' })
    }
}

const addNewBook = async (req, res) => {

    try {
        const newBookData = req.body;
        const newlyCreatedBook = await Book.create(newBookData);
        if (newlyCreatedBook) {
            res.status(201).json({ success: true, message: "Book Added Successfully", data: newlyCreatedBook })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Something went wrong! Please try Again' })
    }


}

const updateBook = async (req, res) => {
    try {
        const getBookId = req.params.id;
        const updatedBookFormData = req.body;
        const updatedBook = await Book.findByIdAndUpdate(getBookId, updatedBookFormData, { new: true })
        if (!updatedBook) {
            return res.status(404).json({ success: false, message: "Book not found" })
        }
        res.status(200).json({ success: true, message: 'Book is updated Successfully', updatedBook })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Something went wrong! Please try Again' })
    }
}

const deleteBook = async (req, res) => {
    try {
        const getBookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(getBookId)
        if (!deletedBook) {
            return res.status(404).json({ success: false, message: "Book not found" })
        }
        res.status(200).json({ success: true, message: 'Book is deleted Successfully', deletedBook })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Something went wrong! Please try Again' })
    }
}

module.exports = {
    getAllBooks,
    getBook,
    addNewBook,
    updateBook,
    deleteBook
}