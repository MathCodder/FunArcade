const valueData = ["A", "B", "C", "D"];
const imageMinion = document.querySelectorAll(".image-block");
const valueCase = document.querySelectorAll(".value");
let arrayValue = ["a", "b"];

function init() {
  console.log(arrayValue);
  while (!checkPairInArray(arrayValue)) {
    arrayValue.length = 0;
    for (const value of valueCase) {
      addValue(value);
    }
  }

  for (const image of imageMinion) {
    image.addEventListener("click", imageClick);
  }
}

const randomValueData = function () {
  let index = Math.floor(Math.random() * 4);
  return valueData[index];
};

function addValue(valueCase) {
  let value = randomValueData();
  arrayValue.push(value);
  valueCase.textContent = value;
}

function imageClick() {
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
