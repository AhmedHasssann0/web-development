let tasks = [];

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");
const clearButton = document.getElementById("clearBtn");

function addTask() {
  const value = input.value;
  tasks.push(value);
  render();
}

function render() {
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const x = tasks[i];
    const p = document.createElement("p");
    p.textContent = tasks[i];
    list.appendChild(p);
  }
}

function clearAll() {
  tasks = [];
  render();
}

button.addEventListener("click", addTask);
clearButton.addEventListener("click", clearAll);