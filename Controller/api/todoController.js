let todos = [];
let idCounter = 1;

// CREATE
exports.createTodo = (req, res) => {
  const { task, completed = false } = req.body;

  if (!task) {
    return res.status(400).json({ error: 'Task field is required' });
  }

  const newTodo = {
    id: idCounter++,
    task,
    completed
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// READ ALL
exports.getTodos = (req, res) => {
  res.json(todos);
};

// READ ONE
exports.getTodoById = (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json(todo);
};

// UPDATE
exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todo = todos.find(t => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
};

// DELETE
exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
};

// BONUS: GET ACTIVE
exports.getActiveTodos = (req, res) => {
  const active = todos.filter(t => !t.completed);
  res.json(active);
};
