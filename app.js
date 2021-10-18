// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);

// FUNCTIONS
function addTodo(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoButton.classList.add("todo");
}
