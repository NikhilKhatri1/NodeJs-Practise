const products = require('../models/Products.js');
require("dotenv").config();

// insert Product

const AddProduct = async (req, res) => {
    try {
        const { name, category, price, inStock, tags } = req.body;
        const isSameProduct = await products.findOne({ name });
        if (isSameProduct) {
            console.log("Product is already Added");
            res.status(401).json({ success: false, message: "Product is already" })
        }
        const newProduct = new products({
            name,
            category,
            price,
            inStock,
            tags,
        })
        const savedProduct = await newProduct.save();
        if (savedProduct) {
            res.status(200).json({ success: true, message: "product is Added", data: savedProduct });
            console.log(savedProduct);
        } else {
            res.status(403).json({ success: false, message: 'Product not saved' })
            console.log("product not saved")
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }

}


// get All Products

const AllProducts = async (req, res) => {
    try {
        const listOfProducts = await products.find({});
        if (!listOfProducts || listOfProducts.length === 0) {
            res.status(404).json({ success: false, message: 'Products not found' })
        }
        res.status(200).json({ success: true, message: "Products list", data: listOfProducts })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }

}

//get product using aggregation

const getProduct = async (req, res) => {
    try {
        const result = await products.aggregate([
            {
                $match: {
                    inStock: true,
                    price: {
                        $gte: 100,
                    }
                }
            }
        ]);
        res.status(200).json({ success: true, message: "Data Found", data: result })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

// update products

// const updateProduct = async (req, res) => {
//     try {
//         const { name, updateData } = req.body;  // Extract name and updateData from request body

//         if (!name || !updateData || Object.keys(updateData).length === 0) {
//             return res.status(400).json({ success: false, message: "Invalid request. Please provide the product name and update data." });
//         }

//         // Find the product by the original name
//         const isProduct = await products.findOne({ name });
//         if (!isProduct) {
//             return res.status(404).json({ success: false, message: "Product not found" });
//         }

//         // Update the product with the provided fields in updateData
//         const updatedProduct = await products.updateOne(
//             { name }, // Find the product by the original name
//             { $set: updateData } // Apply the updates from updateData
//         );

//         // If the product was updated successfully
//         if (updatedProduct.modifiedCount > 0) {
//             return res.status(200).json({ success: true, message: "Product updated successfully" });
//         } else {
//             return res.status(400).json({ success: false, message: "No changes were made. Please check the fields you are updating." });
//         }

//     } catch (error) {
//         console.error("Error updating product:", error.message);
//         return res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updateProduct = req.body;
        const newUpdatedProduct = await products.findByIdAndUpdate(productId, { $set: updateProduct }, { new: true });
        if (newUpdatedProduct) {
            res.status(200).json({ success: true, message: "Product Updated Successfully", data: newUpdatedProduct });
            console.log(newUpdatedProduct)
        }
        else {
            res.status(404).json({ success: false, message: "Product not found" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "internal server issue" })
        console.log(error.message)
    }
}





module.exports = {
    AddProduct,
    AllProducts,
    updateProduct,
    getProduct,
}