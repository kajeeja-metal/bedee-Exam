let todos = [];
let currentId = 1;

const getAllTodos = () => todos;

const getTodoById = (id) => todos.find(t => t.id === id);

const addTodo = (task, display_order) => {
  const newTodo = {
    id: currentId++,
    task,
    display_order: display_order !== undefined ? display_order : todos.length + 1,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
};

const updateTodo = (id, task, completed, display_order) => {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.task = task !== undefined ? task : todo.task;
    todo.completed = completed !== undefined ? completed : todo.completed;
    todo.display_order = display_order !== undefined ? display_order : todo.display_order;
  }
  return todo;
};

const deleteTodo = (id) => {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo
};
