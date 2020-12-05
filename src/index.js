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
  this.car = [];
  this.count;
  this.racing = function () {
    // console.log(this.car);
    while (this.count--) {
      getRandomNum(this.car);
      moveCar(this.car);
    }
  };
}

const play = new RacingCarGame();

gameStart(play);
