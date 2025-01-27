// it Describe the structure of Data

const { gql } = require('graphql-tag');

//string
//int
//float
//bool
//id-> unique identifier

//steps
// 1. define Types
// 2. queries
// 3. mutation

const typeDefs = gql`
    type Product{
        id:ID!
        title:String!
        category:String!
        price:Float!
        stock:Boolean!
    }

    type Query {
        products: [Product!]!
        product(id: ID!): Product 
    }
`;


module.exports = typeDefs

