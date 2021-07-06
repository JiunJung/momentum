const clockElement = document.querySelector("h2#clock");

function setTime(){
  const now = new Date(); //반드시 함수 내부에 위치해야함. 현재 시각에 대한 정보가 담긴 Date객체를 쓰기 위해 인스턴스 생성. (이 때 Date는 생성자 함수.)
  const hours =  String(now.getHours()).padStart(2, '0') ;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}

setTime();
setInterval(setTime, 1000);