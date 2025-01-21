const express = require('express');
const { productsList, productDetail } = require('./routes/Products');
const { dateMiddleWare } = require('./middlewares/dateMiddleWare');

const app = express();

const PORT = 4000;

app.get('/', dateMiddleWare, (req, res) => {
    res.send('Home Page')
})

app.get('/api/products', productsList);
app.get('/api/products/product/:id', productDetail);


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})