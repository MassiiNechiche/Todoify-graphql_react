const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const todo = mongoose.model("todo", TodoSchema);

module.exports = todo;
