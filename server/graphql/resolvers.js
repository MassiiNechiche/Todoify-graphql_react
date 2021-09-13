const Todo = require("../Model/Todo");

// Resolvers
const resolvers = {
  Query: {
    getAll: async () => {
      return await Todo.find();
    },
  },
  Mutation: {
    createTodo: async (parent, args, context, info) => {
      const { title, description } = args.todo;
      const todo = await new Todo({ title, description }).save();
      return todo;
    },

    updateTodo: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.todo;
      const todo = await Todo.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return todo;
    },

    deleteTodo: async (parent, args, context, info) => {
      const { id } = args;
      await todo.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};

module.exports = resolvers;
