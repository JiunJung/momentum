const todoForm = document.querySelector("#todo-form"); //깃허브 커밋 확인!
const todoList = document.querySelector("#todo-list");
const todoText = document.querySelector("#todo-form input"); //todoList.querySelector("input"); 이라고도 할 수 있음.
let todoArray = []; //todo리스트가 저장되어있는 배열 let으로 한 이유를 알아야 해!
//문제는 이 배열(저장소)에서부터 나온다. 뭔가 문제가 있을 때는 내가 만든 배열이나 객체를 살펴보자.(console.log 활용)
//deleteToDo가 되어도 배열은 변하지 않으므로 localstorage에서 제외되지 않았다.
//같은 내용이 있더라도 구분해서 삭제할 수 있어야 함. 따라서 객체를 만든다. 

todoForm.addEventListener("submit",hadleToDoSubmit);

if(localStorage.getItem("todo")){ //localstorage에 값이 존재한다면
  todoArray = JSON.parse(localStorage.getItem("todo"));
  const parseToDoArray = JSON.parse(localStorage.getItem("todo"));
  parseToDoArray.forEach(element => {
    showToDoList(element);
  });
}

function hadleToDoSubmit(event){
  event.preventDefault();
  const todoSaved = todoText.value; //입력 받은 걸 변수에 잠시 저장해 둔다.
  todoText.value = ""; //텍스트 작성 후 텍스트 상자 비우기 , 이런다고 해서 todoSaved가 없어지는건 아님.
  //저장해 둔 변수를 함수에 넣어서 사용자에게 보이도록 만들어야 할 것이다. 함수를 만들러가자.
  const newTodoObj = { //객체를 만들어서 todoArray배열에 넣자.
    text : todoSaved,
    id : Date.now(), //Date.now() 로 랜덤한 ID 생성 (그 시간의 밀리세컨드)
  }
  showToDoList(newTodoObj);
  todoArray.push(newTodoObj); //텍스트가 아닌 객체를 푸쉬한다.
  saveToDos();
  //const parseToDoArray = JSON.parse(localStorage.getItem("todo")); //스트링으로 저장된 배열을 값으로 변환
  //console.log(parseToDoArray);
}

function saveToDos(){
  const stringToDoArray = JSON.stringify(todoArray); //배열을 스트링으로 바꿔서 로컬스토리지에 넣을 준비
  localStorage.setItem("todo",stringToDoArray);
}

function showToDoList(todoSaved){ //여기서의 todosaved는 매개변수일 뿐임. //todoSaved는 객체이다.
  const toDoLiEliment = document.createElement("li"); //이 함수를 실행하면 Eliment가 생성이 되는 것임.
  toDoLiEliment.id = todoSaved.id;
  const span = document.createElement("span");
  span.innerText = todoSaved.text;
  const button = document.createElement("button"); //삭제버튼생성
  button.innerText = "❌"; //imogi 넣어도 됨  
  button.addEventListener("click",deleteToDo);
  toDoLiEliment.appendChild(span);
  toDoLiEliment.appendChild(button);
  todoList.appendChild(toDoLiEliment);
  // button.addEventListener("click",function(){  //이렇게 해도 리스트를 노드에서 삭제할 수 있다.
  //   todoList.removeChild(toDoLiEliment);
  // });
}

function deleteToDo(event){
  const parent = event.target.parentNode; //이벤트가 일어난 대상(버튼)의 부모요소를 grab한다음
  todoArray = todoArray.filter(item => item.id !== parseInt(parent.id)); //todoArray를 업데이트 해준다. 
  saveToDos();
  parent.remove(); //제거한다.  
}








