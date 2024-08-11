const buttonStart = document.getElementById("start");
const containerGame = document.getElementById("game");
const score = document.getElementById("score");
const time = document.getElementById("time");
const styleContainer = getComputedStyle(containerGame);
let timerTarget;
let nbTarget = 0;

let timerDespawn;

const init = function () {
  buttonStart.addEventListener("click", startGame);
};

const startGame = function () {
  time.textContent = "20";
  score.textContent = "0";
  nbTarget = 0;
  if (nbTarget < 10) {
    timerTarget = setInterval(createTarget, 1000);
  }
  buttonStart.removeEventListener("click", startGame);
  buttonStart.addEventListener("click", stopGame);
};

const createTarget = function () {
  let target = document.createElement("img");
  target.src = "../images/target.png";
  target.width = 80;
  const containerWidth = containerGame.clientWidth;
  const containerHeight = containerGame.clientHeight;

  const randomLeft = Math.floor(Math.random() * (containerWidth - 100));
  const randomTop = Math.floor(Math.random() * (containerHeight - 100));

  target.style.position = "absolute";
  target.style.left = randomLeft + "px";
  target.style.top = randomTop + "px";
  target.setAttribute("class", "target");
  containerGame.appendChild(target);

  time.textContent = parseInt(time.textContent) - 1;
  nbTarget += 1;

  if (time.textContent === "0") {
    stopGame();
  }

  target.addEventListener("click", shootTarget);
};

const shootTarget = function () {
  this.style.display = "none";
  let sc = parseInt(score.textContent);
  sc++;
  score.textContent = sc;
};

const stopGame = function () {
  clearInterval(timerTarget);
  const target = containerGame.querySelectorAll("img");
  for (let index = 0; index < target.length; index++) {
    containerGame.removeChild(target[index]);
  }

  buttonStart.addEventListener("click", startGame);
};

const despawnTarget = function (target) {
  target.style.display = "none";
};

init();
