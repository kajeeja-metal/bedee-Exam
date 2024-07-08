const express = require('express');
const router = express.Router();
const {
  getTodos,
  getTodo,
  createTodo,
  updateTodoById,
  deleteTodoById
} = require('../controllers/todoController');

const validateTodo = (req, res, next) => {
  const { task, display_order } = req.body;
  if (typeof task !== 'string' || task.trim() === '') {
    return res.status(400).send('Invalid task');
  }
  if (display_order !== undefined && typeof display_order !== 'number') {
    return res.status(400).send('Invalid display_order');
  }
  next();
};

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', validateTodo, createTodo);
router.put('/:id', validateTodo, updateTodoById);
router.delete('/:id', deleteTodoById);

module.exports = router;
