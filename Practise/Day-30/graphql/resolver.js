// const Products = require('../data/products');
const Products = require('../models/productModel');



const resolver = {
    Query: {
        Products: async () => await Products.find({}),
        Product: (_, { id }) => Products.find(item => item.id === id)
    },

    Mutation: {
        /*
        createProduct: (_, { title, category, price, inStock }) => {
            const NewlyCreatedProduct = {
                id: String(Products.length + 1),
                title,
                category,
                price,
                inStock
            }
            Products.push(NewlyCreatedProduct);
            return NewlyCreatedProduct
        }, 
        */
        createProduct: async (_, args) => {
            const NewlyCreatedProduct = new Products(args);

            return await NewlyCreatedProduct.save()
        },
        /*
        deleteProduct: (_, { id }) => {
            const index = Products.findIndex(item => item.id === id)
            if (index === -1) {
                return false;
            }
            Products.splice(index, 1);

            return true;
        },
        */
        deleteProduct: async (_, { id }) => {

            const deletedProduct = await Products.findByIdAndDelete(id);
            return !!deletedProduct;

        },

        /*
        updateProduct: (_, { id, ...updates }) => {
            const index = Products.findIndex(item => item.id === id)
            if (index === -1) return null;
            const updatedProduct = {
                ...Products[index], ...updates
            }
            Products[index] = updatedProduct;

            return updatedProduct;
        }
        */
        updateProduct: async (_, { id, ...updatedField }) => {
            return await Products.findByIdAndUpdate(id, updatedField, { new: true });
        }
    }
}


module.exports = resolver;