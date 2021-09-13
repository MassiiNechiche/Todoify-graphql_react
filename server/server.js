const express = require("express");

const { ApolloServer } = require("apollo-server-express");

const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

// Database connection
const URL =
  "mongodb+srv://admin:admin@cluster0.swiiu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MongoDB connected");
  }
);

// Server

const StartServer = async () => {
  const app = express();

  const ApolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await ApolloServer.start();
  ApolloServer.applyMiddleware({ app: app });
  app.listen(4000, () => console.log("Server running on port 4000"));
};

StartServer();
