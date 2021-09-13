const Post = require("../Model/Post");

// Resolvers
const resolvers = {
  Query: {
    getAll: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    createTodo: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = await new Post({ title, description }).save();
      return post;
    },

    updateTodo: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return post;
    },

    deleteTodo: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};

module.exports = resolvers;
