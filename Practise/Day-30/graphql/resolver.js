const Products = require('../data/products');

const resolver = {
    Query: {
        Products: () => Products,
        Product: (_, { id }) => Products.find(item => item.id === id)
    },

    Mutation: {
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
        deleteProduct: (_, { id }) => {
            const index = Products.findIndex(item => item.id === id)
            if (index === -1) {
                return false;
            }
            Products.splice(index, 1);

            return true;
        }
    }
}


module.exports = resolver;