const { gql } = require('graphql-tag');

const typeDefs = gql`
    type Product {
        id: ID!
        title: String!
        price: Float!
        inStock: Boolean!
        category:String!
    }
    type Query {
        Products: [Product!]!
        Product(id: ID!): Product
    }
    type Mutation {
        createProduct(
            title: String!
            category: String!
            price: Float!
            inStock: Boolean!
        ): Product
        deleteProduct(id: ID!): Boolean
    }


`

module.exports = typeDefs;