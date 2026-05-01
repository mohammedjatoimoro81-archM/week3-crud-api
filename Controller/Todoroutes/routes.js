const express = require('express');
const router = express.Router();
const todoController = require('../api/todoController');

// CRUD routes
router.post('/', todoController.createTodo);
router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodoById);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

// Bonus route
router.get('/active/list', todoController.getActiveTodos);

module.exports = router;
