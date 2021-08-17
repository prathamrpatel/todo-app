require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./models/todo');
const URL = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((response) => {
    console.log('Connected to DB');
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

app.get('/todos', (req, res) => {
  Todo.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  const todoInstance = new Todo({
    id: todo.id,
    text: todo.text,
    isComplete: todo.isComplete,
  });
  todoInstance
    .save()
    .then((result) => {
      res.status(201).end();
    })
    .catch((err) => console.log(err));
});

app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  Todo.findOne({ id: id })
    .then((result) => {
      Todo.updateOne({ id: id }, { isComplete: !result.isComplete })
        .then((result) => {
          res.status(200).end();
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  Todo.deleteOne({ id: id })
    .then((result) => {
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err);
    });
});
