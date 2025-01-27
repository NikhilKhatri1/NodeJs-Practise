


const products = require('../data/products');

const resolvers = {
    Query: {
        products: () => products,
        product: (_, { id }) => products.find(item => item.id === id)
    }
}

module.exports = resolvers;