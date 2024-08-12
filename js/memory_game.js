const valueData = ["A", "B", "C", "D"];
const imageMinion = document.querySelectorAll(".image-block");
const valueCase = document.querySelectorAll(".value");
const tryNmb = document.getElementById("nmb-tent");
const btn = document.getElementById("start-btn");
let arrayValue = ["a", "b"];
let numberTry = 0;
let deckBack = 0;
let timerForLook;

function init() {
  for (const image of imageMinion) {
    image.addEventListener("click", imageClick);
  }

  btn.addEventListener("click", createGame);
}

const randomValueData = function () {
  let index = Math.floor(Math.random() * 4);
  return valueData[index];
};

const createGame = function () {
  while (!checkPairInArray(arrayValue)) {
    arrayValue.length = 0;
    for (const value of valueCase) {
      addValue(value);
    }
  }
};

function addValue(valueCase) {
  let value = randomValueData();
  arrayValue.push(value);
  valueCase.textContent = value;
}

function imageClick() {
  deckBack += 1;
  if (deckBack == 2) {
    numberTry += 1;
    tryNmb.textContent = `Number Try : ${numberTry}`;
    deckBack = 0;
  }
  this.style.display = "none";
}

function checkPairInArray(arrayValue) {
  const occurences = {};

  for (const value of arrayValue) {
    if (!occurences[value]) {
      occurences[value] = 0;
    }
    occurences[value] += 1;
  }

  for (const key in occurences) {
    if (occurences[key] !== 2) {
      console.log(key);
      return false;
    }
  }
  return true;
}

init();
