const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//тут мы добавили картинку ну просто вызвалие её но не нарисовали
const ground = new Image();
ground.src = "img/ground.png";

//тут тоже вызываем только уже еду рисовать будем позже
const foodImg = new Image();
foodImg.src = "img/food.png";

let box = 32;

let score = 0;
//тут у нас появляется еда в рандомном месте
let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box
};

//оброботчик событий
document.addEventListener("keydown", direction);

let dir;

function direction(event){
  if(event.keyCode == 37)
    dir = "left";
  else if(event.keyCode == 38)
    dir = "up";
  else if(event.keyCode == 39)
    dir = "right";
  else if(event.keyCode == 40)
    dir = "down";
}

//тут мы уже рисуем сами картинки
function drawGame() {
  ctx.drawImage(ground, 0, 0); //это у нас картинка ground

  ctx.drawImage(foodImg, food.x, food.y); //нарисовал еду а сверху что бы она появлялась в рандомном месте
//тут рисую саму змею
  for(let i = 0; i < snake.length; i++){
    ctx.fillStyle = "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
//рисую счёт
  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(score, box *2.5, box * 1.7)
}

//тут мы пишим что функция drawGame будет обновлятся каждые 100 милисекунд
let game = setInterval(drawGame, 100);
