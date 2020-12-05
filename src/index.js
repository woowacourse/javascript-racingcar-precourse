import {
  onBtnCarNamesClicked,
  onBtnRacingCountClicked,
} from "./library/btn-clicked.js";

export default function RacingCarGame(cars) {
  this.play = function () {
    let randomNums = [];
    for (let i = 0; i < cars.length; i++) {
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

const btnCarNames = document.getElementById("car-names-submit");
const inputCarNames = document.getElementById("car-names-input");
btnCarNames.onclick = function () {
  onBtnCarNamesClicked(cars, inputCarNames);
};

const btnRacingCount = document.getElementById("racing-count-submit");
const inputRacingCount = document.getElementById("racing-count-input");
btnRacingCount.onclick = function () {
  onBtnRacingCountClicked(inputRacingCount, cars);
};
