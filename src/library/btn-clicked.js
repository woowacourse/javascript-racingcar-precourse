import { showOneResult, showFinalWinners } from "./result-box.js";
import { makeElementBlock } from "./make-element-block.js";
import { addCorrectCarNames } from "./car-names.js";
import Car from "./car.js";
import RacingCarGame from "../index.js";

export function onBtnCarNamesClicked(cars, inputCarNames) {
  const carNames = inputCarNames.value.split(",");
  const correctCarNames = addCorrectCarNames(carNames, inputCarNames);
  const racingBox = document.getElementById("racing-count-box");

  if (!correctCarNames.includes(undefined)) {
    makeElementBlock(racingBox);
    correctCarNames.forEach((correctCar) => {
      cars.push(new Car(correctCar));
    });
  }

  return;
}

export function onBtnRacingCountClicked(inputRacingCount, cars) {
  let racingCount = Number(inputRacingCount.value);
  const resultBox = document.getElementById("result-box");
  makeElementBlock(resultBox);

  const racingGame = new RacingCarGame(cars);
  console.log(racingGame);
  for (let i = 0; i < racingCount; i++) {
    racingGame.play();
    showOneResult(cars);
  }

  showFinalWinners(cars);

  return;
}
