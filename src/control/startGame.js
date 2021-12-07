import getInputCarNames from "../model/getInputCarNames.js";
import getInputRunTime from "../model/getInputRunTime.js";
import racingCars from "./racingCars.js";

export default function startGame() {
  let carNames = getInputCarNames();
  let runTime = getInputRunTime();

  const $app = document.getElementById("app");
  let newDIV = document.createElement("div");
  newDIV.id = "result";
  $app.appendChild(newDIV);

  console.log("조건 확인", carNames, runTime);
  if (carNames && runTime) {
    console.log("게임 시작");
    racingCars(carNames, runTime);
  } else {
    console.log("게임 시작 조건 불층분");
  }
}
