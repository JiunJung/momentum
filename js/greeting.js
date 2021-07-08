const loginForm = document.querySelector("#login-form"); 
const loginInput = loginForm.querySelector("input");
const h1 = document.querySelector("#greeting");

const STORAGE_KEY_NAME = 'username';
const HIDDEN_CLASS = 'hidden';

function makeGreetingText(username){ 
  h1.innerText = `Nice to meet you ${username}`; 
  h1.classList.remove(HIDDEN_CLASS); 
}

function onLoginSubmitted(event){ 
  event.preventDefault(); 
  localStorage.setItem(STORAGE_KEY_NAME,loginInput.value);
  loginForm.classList.add(HIDDEN_CLASS);
  makeGreetingText(loginInput.value);
  makeChangeNameButton();
}

function makeChangeNameButton(){
  const changeNameBtn = document.createElement("button");
  changeNameBtn.innerText = "Change name";
  changeNameBtn.id = "change-botton";
  changeNameBtn.addEventListener("click", function(){
    localStorage.removeItem("username");
    location.reload();
  });
  document.querySelector("#container").prepend(changeNameBtn);
}

const getUserName = localStorage.getItem(STORAGE_KEY_NAME);
 
if(getUserName === null){ 
  loginForm.classList.remove(HIDDEN_CLASS); 
  loginForm.addEventListener("submit",onLoginSubmitted);
} else{
  makeGreetingText(getUserName); 
  makeChangeNameButton();
}




