const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const randomImage = images[Math.floor(Math.random() * images.length)];

const bgrImage = document.createElement('img'); //요소 노드가 생성되어있는 상태이긴 하지만 아직 문서의 부모노드 밑에 연결되지는 않음.
bgrImage.src = `img/${randomImage}`; //이미지 랜덤생성

document.getElementById("container").prepend(bgrImage);