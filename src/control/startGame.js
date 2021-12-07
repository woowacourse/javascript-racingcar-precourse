import getInputCarNames from "../model/getInputCarNames.js";
import getInputRunTime from "../model/getInputRunTime.js";
import resetView from "../view/resetView.js";
import racingCars from "./racingCars.js";

export default function startGame() {
  let carNames = getInputCarNames();
  let runTime = getInputRunTime();

  console.log("조건 확인", carNames, runTime);
  if (carNames && runTime) {
    console.log("게임 시작");
    resetView();
    racingCars(carNames, runTime);
  } else {
    console.log("게임 시작 조건 불층분");
  }
}
