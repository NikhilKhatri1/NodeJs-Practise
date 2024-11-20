const express = require("express")
const { getBook, getAllBooks, addNewBook, updateBook, deleteBook } = require("../controllers/bookController")

// create a express router

const router = express.Router()

// all routes related to books only
router.get('/get', getAllBooks)

// router for one book

router.get('/get/:id', getBook)

// add new book
router.post('/add-book', addNewBook)

// update the book

router.put('/update-book/:id', updateBook)

//delete book

router.delete('/delete-book/:id', deleteBook)


module.exports = router;