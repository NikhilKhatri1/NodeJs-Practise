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

// get all books
// intro route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to our Bookstor Api" });
});

app.get('/get-books', (req, res) => {
    res.json(books)
});

app.get('/get-books/:id', (req, res) => {
    const book = books.find(item => item.id === parseInt(req.params.id));
    if (book) {
        res.status(200).json(book)
    } else {
        res.status(404).json({ message: "Book not found" })
    }
})

// add a new book
app.post('/add-book', (req, res) => {
    const newBook = {
        id: Math.floor(Math.random() * 1000),
        title: `Book ${Math.floor(Math.random() * 1000)}`
    }
    books.push(newBook)
    res.status(200).json({ data: newBook, message: "Book Added successfully" })
})

// update the book
app.put('/update/:id', (req, res) => {
    const findCurrentBook = books.find(item => item.id === parseInt(req.params.id))
    if (findCurrentBook) {
        findCurrentBook.title = req.body.title || findCurrentBook.title
        res.status(200).json({ message: `Book with ID ${req.params.id} updated successfully`, data: findCurrentBook })
    } else {
        res.status(404).json({ message: "Book not found" })
    }
})

//delete the book
app.delete('/delete/:id', (req, res) => {
    const bookIndex = books.findIndex(item => item.id === parseInt(req.params.id));

    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1); // removes the book at the found index
        res.status(200).json({ message: 'Book deleted successfully', data: deletedBook[0] });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});


const PORT = 4040;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})