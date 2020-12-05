import { onBtnCarNamesClicked } from "./library/car-names.js";
import { showOneResult, showFinalWinners } from "./library/result-box.js";
import { makeElementBlock } from "./library/make-element-block.js";

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

let cars = [];
console.log("east, west, south, north");

const btnCarNames = document.getElementById("car-names-submit");
const inputCarNames = document.getElementById("car-names-input");

btnCarNames.onclick = function () {
  onBtnCarNamesClicked(cars, inputCarNames);
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
