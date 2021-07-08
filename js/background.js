const bodyColorArray = ["body-color-pink", "body-color-skyblue", "body-color-green"];
const bodyColor = bodyColorArray[Math.floor(Math.random() * bodyColorArray.length)];
document.body.classList.add(bodyColor);
