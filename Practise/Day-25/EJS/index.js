const express = require('express');
const path = require('path');

const app = express();

// set the view engine as ejs

app.set('view engine', 'ejs');

// set the diretory

app.set('views', path.join(__dirname, 'views'))

const products = [
    {
        id: 1,
        title: 'Product1'
    },
    {
        id: 2,
        title: 'Product2'
    },
    {
        id: 3,
        title: 'Product3'
    }
]

app.get('/', (req, res) => {
    res.render('home', { title: 'Home', products: products })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' })
})

const port = 4000;

app.listen(port, () => {
    console.log(`Server http://localhost:${port}`)
})