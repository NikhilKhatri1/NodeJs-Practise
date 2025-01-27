// server.js

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const resolvers = require('./graphql/resolver');
const typeDefs = require('./graphql/schema');

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 }
    });
    console.log(`Server Started at ${url}`);
}

startServer();