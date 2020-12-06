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

function isCorrectRacingCount(inputRacingCount) {
  let racingCount = Number(inputRacingCount.value);
  if (racingCount < 1) {
    alert("올바른 시도 횟수를 입력해 주세요");
    inputRacingCount.value = "";

    return false;
  }

  return true;
}

export function onBtnRacingCountClicked(inputRacingCount, cars) {
  if (isCorrectRacingCount(inputRacingCount)) {
    let racingCount = Number(inputRacingCount.value);
    const resultBox = document.getElementById("result-box");
    makeElementBlock(resultBox);

    const racingGame = new RacingCarGame(cars);
    for (let i = 0; i < racingCount; i++) {
      racingGame.play();
      showOneResult(cars);
    }

    showFinalWinners(cars);

    return;
  }
}
