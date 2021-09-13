const { gql } = require("apollo-server-express");

// Query
const typeDefs = gql`
  type Todo {
    id: ID
    title: String
    description: String
  }
  type Query {
    getAll: [Todo]
  }

  input TodoInput {
    title: String
    description: String
  }

  type Mutation {
    createTodo(todo: TodoInput): Todo
    updateTodo(id: String, todo: TodoInput): Todo
    deleteTodo(id: String): String
  }
`;

module.exports = typeDefs;
