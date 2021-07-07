const API_KEY = "c467b73e2c2713d73aa6493d973fde93"

navigator.geolocation.getCurrentPosition(success, error);

function success(pos){
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  fetch(url).then(response => response.json()).then(data => {
    const location = document.querySelector("#weather img");
    const weather = document.querySelector("#weather span:last-child");
    location.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
  });
}

function error(){
  console.log("cannot find your location");
}
