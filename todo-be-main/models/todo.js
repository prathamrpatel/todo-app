const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  isComplete: { type: Boolean, required: true },
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
