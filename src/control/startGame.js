import getInputCarNames from "../model/getInputCarNames.js";
import getInputRunTime from "../model/getInputRunTime.js";
import resetView from "../view/resetView.js";
import racingCars from "./racingCars.js";

export default function startGame() {
  let carNames = getInputCarNames();
  let runTime = getInputRunTime();

  if (carNames && runTime) {
    resetView();
    racingCars(carNames, runTime);
  }
}
