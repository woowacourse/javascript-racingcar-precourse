import { showOneResult, showFinalWinners } from "./result-box.js";
import { makeElementBlock } from "./make-element-block.js";
import RacingCarGame from "../index.js";

export function onBtnRacingCountClicked(inputRacingCount, cars) {
  let racingCount = Number(inputRacingCount.value);
  const resultBox = document.getElementById("result-box");
  makeElementBlock(resultBox);

  const racingGame = new RacingCarGame(racingCount, cars);
  for (let i = 0; i < racingCount; i++) {
    racingGame.play();
    showOneResult(cars);
  }

  showFinalWinners(cars);

  return;
}
