const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

// CREATE
app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), task: req.body.task };
  todos.push(todo);
  res.status(201).json({ success: true, data: todo });
});

// READ
app.get('/todos', (req, res) => {
  res.json({ success: true, data: todos });
});

// UPDATE
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ success: false, message: "Not found" });
  }
  todo.task = req.body.task;
  res.json({ success: true, data: todo });
});

// DELETE
app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.json({ success: true, message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));