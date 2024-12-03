const express = require("express");
const { AddProduct, AllProducts, updateProduct, getProduct } = require("../controllers/productControllers");

const router = express.Router();


router.post('/add-product', AddProduct);
router.get('/products', AllProducts);
// using Aggregate
router.get('/get-products', getProduct);

router.put('/update-product/:id', updateProduct);


module.exports = router;