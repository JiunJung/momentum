const loginForm = document.querySelector("#login-form"); //form요소 가져오기
const loginInput = document.querySelector("#login-form input"); //인풋 요소 가져오기
const greeting = document.querySelector("#greeting"); //인삿말 h1 요소 가져오기

const STORAGE_KEY_NAME = 'username'; //'username' string 반복 많아서 따로 저장
const HIDDEN_CLASS = 'hidden'; //반복되는 string 따로 저장

function makeGreetingText(username){ //중복을 피하기 위해 함수 만듦(코드 정리하다가 마지막에 만듦.)
  greeting.innerText = `Nice to meet you ${username}`; //인삿말 텍스트 제작
  greeting.classList.remove(HIDDEN_CLASS); //인삿말 띄우기
}

function onLoginSubmitted(event){ //form이 submit되면 실행할 함수 
  event.preventDefault(); //기본기능인 새로고침 안하기 위함.
  localStorage.setItem(STORAGE_KEY_NAME,loginInput.value); //로컬스토리지에 추가 loginInput.value를 변수로 지정하고 싶으면 이 함수 내에서 const로 선언하면 된다. 난 굳이 안함.
  loginForm.classList.add(HIDDEN_CLASS); //폼 숨기기
  makeGreetingText(loginInput.value); //인삿말 텍스트 만들고 보여주기
}

const getUserName = localStorage.getItem(STORAGE_KEY_NAME); //저장소에서 이름(값) 가져오기
 
//문서를 불러오면 조건에 따라 이름을 입력시키거나 인삿말하기
if(getUserName === null){  //저장되어 있는 이름이 없다면 폼을 보여주고 submit받기
  loginForm.classList.remove(HIDDEN_CLASS); //loginForm의 hiiden class 해제
  loginForm.addEventListener("submit",onLoginSubmitted);  //submit 을 listen 하다가 함수 실행.
} else{
  makeGreetingText(getUserName); //인삿말 텍스트 만들고 보여주기
}


