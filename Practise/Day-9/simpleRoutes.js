const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Home Page")
});

app.get("/products", (req, res) => {
    const products = [
        { id: 1, model: "TV" },
        { id: 2, model: "Mobile" },
        { id: 3, model: "Satelitte" },
    ]
    res.send(products)
})
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const products = [
        { id: 1, model: "TV" },
        { id: 2, model: "Mobile" },
        { id: 3, model: "Satelitte" },
    ]
    const getProduct = products.find(product => product.id === productId)
    if (getProduct) {
        res.json(getProduct)
    } else {
        res.status(404).send("product not found")
    }
})


app.listen(3000, () => {
    console.log("Server started at http://localhost:3000")
})