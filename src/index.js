import { hideTags } from "./controlTags.js";
import {
  carNamesSubmitHandler,
  racingCountSubmitHandler,
} from "./eventHandler.js";

import { getRandomNum, moveCar } from "./racingNow.js";

function gameStart(play) {
  const carNamesSubmit = document.querySelector("#car-names-submit");
  const racingCountSubmit = document.querySelector("#racing-count-submit");
  hideTags();
  carNamesSubmit.addEventListener("click", () => carNamesSubmitHandler(play));
  racingCountSubmit.addEventListener("click", () =>
    racingCountSubmitHandler(play)
  );
}

export default function RacingCarGame() {
  this.carNames, this.carArr, this.count, this.maxValue, this.winner;
  this.racing = function () {
    while (this.count--) {
      this.maxValue = getRandomNum(this.carArr);
      moveCar(this.carArr);
    }
  };
  this.racingEnd = function () {
    this.winner = [];
    this.carArr.forEach((v) => {
      if (this.maxValue === v.go) this.winner.push(v.name);
    });
  };
}

const play = new RacingCarGame();

gameStart(play);
