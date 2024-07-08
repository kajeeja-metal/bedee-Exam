const {
    getAllTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
  } = require('../models/todoModel');
  
  const sorted_display_orders = (todos) => {
    return todos.slice().sort((a, b) => a.display_order - b.display_order);
  }
  
  const getTodos = (req, res) => {
    const todos = getAllTodos();
    const sortedTodos = sorted_display_orders(todos);
    res.json({
      status: true,
      data: sortedTodos
    });
  };
  
  const getTodo = (req, res) => {
    const todo = getTodoById(parseInt(req.params.id));
    if (!todo) return res.status(404).send('Todo not found');
    res.json({
      status: true,
      data: todo
    });
  };
  
  const createTodo = (req, res) => {
    const { task, display_order } = req.body;
    const newTodo = addTodo(task, display_order);
    const todos = getAllTodos();
    const sortedTodos = sorted_display_orders(todos);
    res.json({
      status: true,
      message: "Create task success",
      data: sortedTodos
    });
  };
  
  const updateTodoById = (req, res) => {
    const { task, completed, display_order } = req.body;
    const todo = updateTodo(parseInt(req.params.id), task, completed, display_order);
    if (!todo) return res.status(404).send('Todo not found');
    const todos = getAllTodos();
    const sortedTodos = sorted_display_orders(todos);
    res.json({
      status: true,
      message: "Update task success",
      data: sortedTodos
    });
  };
  
  const deleteTodoById = (req, res) => {
    const success = deleteTodo(parseInt(req.params.id));
    if (!success) return res.status(404).send('Todo not found');
    res.json({
      status: true,
      message: "Delete task success",
    });
  };
  
  module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodoById,
    deleteTodoById
  };
  