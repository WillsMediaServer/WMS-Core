import express from "express";
import { ApolloServer, gql } from "apollo-server-express";


const app = express();
const schema = gql`
    type Song {
        name: String
    }

    type Query {
        song: Song,
        songs: [Song]
    }
`;
const reslovers = {};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: reslovers,
    // context: { } // pass through models
});

server.applyMiddleware({
    app,
    path: "/graphql"
});

app.listen({ port: 8080 }, () => {
    console.log("WMS Started at http://localhost:8080");
});
