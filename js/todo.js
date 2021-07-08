const todoForm = document.querySelector("#todo-form");
const todoUl = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input"); 
let todoArray = [];

todoForm.addEventListener("submit",hadleToDoSubmit);

if(localStorage.getItem("todo")){
  const parseToDoArray = JSON.parse(localStorage.getItem("todo"));
  todoArray = parseToDoArray;
  todoArray.forEach(element => showToDoList(element));
}

function hadleToDoSubmit(event){
  event.preventDefault();
  const todoContent = todoInput.value;
  todoInput.value = ""; 
  const newTodoObj = {
    text : todoContent,
    id : Date.now(),
  }
  showToDoList(newTodoObj);
  todoArray.push(newTodoObj);
  saveToDos();
}

function saveToDos(){
  const stringToDoArray = JSON.stringify(todoArray);
  localStorage.setItem("todo",stringToDoArray);
}

function showToDoList(todoObj){
  const todoLi = document.createElement("li"); 
  todoLi.id = todoObj.id;
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const button = document.createElement("button");
  button.innerText = "✓";
  button.addEventListener("click",deleteToDo);
  todoLi.appendChild(span);
  todoLi.appendChild(button);
  todoUl.appendChild(todoLi);
}

function deleteToDo(event){
  const parent = event.target.parentNode;
  todoArray = todoArray.filter(item => item.id !== parseInt(parent.id)); 
  saveToDos();
  parent.remove();
}








