import {
  showOneResult,
  getWinnerNames,
  makeNamesToStr,
  showFinalWinners,
} from "./library/result-box.js";

export default function RacingCarGame(racingCount, cars) {
  this.play = function () {
    let randomNums = [];
    for (let i = 0; i < racingCount; i++) {
      randomNums.push(Math.floor(Math.random() * 10));
    }
    randomNums.forEach((randomNum, idx) => {
      if (randomNum > 3) {
        cars[idx].position++;
      }
    });
  };
}

function Car(name) {
  this.name = name;
  this.position = 0;
}
let cars = [];
console.log("east, west, south, north");
const btnCarNames = document.getElementById("car-names-submit");
const inputCarNames = document.getElementById("car-names-input");

function isCorrectCarNames(carName) {
  if (carName.length > 0 && carName.length <= 5) {
    return true;
  }

  return false;
}

function addCorrectCarNames(carNames) {
  const correctCarNames = carNames.map(function (carName) {
    carName = carName.trim();
    if (!isCorrectCarNames(carName)) {
      alert("모든 자동차의 이름을 5자 이하로 입력해주세요.");
      inputCarNames.value = "";

      return;
    }

    return carName;
  });

  return correctCarNames;
}

function makeElementBlock(element) {
  return (element.style.display = "block");
}

btnCarNames.onclick = function () {
  const carNames = inputCarNames.value.split(",");
  const correctCarNames = addCorrectCarNames(carNames);
  const racingBox = document.getElementById("racing-count-box");

  if (!correctCarNames.includes(undefined)) {
    makeElementBlock(racingBox);
    correctCarNames.forEach((correctCar) => {
      cars.push(new Car(correctCar));
    });
  }
};

const btnRacingCount = document.getElementById("racing-count-submit");
const inputRacingCount = document.getElementById("racing-count-input");

btnRacingCount.onclick = function () {
  let racingCount = Number(inputRacingCount.value);
  const resultBox = document.getElementById("result-box");
  makeElementBlock(resultBox);

  const racingGame = new RacingCarGame(racingCount, cars);
  for (let i = 0; i < racingCount; i++) {
    racingGame.play();
    showOneResult(cars);
  }

  showFinalWinners(cars);
};
