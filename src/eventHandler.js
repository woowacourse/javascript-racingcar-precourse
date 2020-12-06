import Car from "./Car.js";
import { printResult } from "./printResult.js";
import {
  showCountTags,
  showResultTags,
  clearResultDiv,
} from "./controlTags.js";
import {
  validateCarInput,
  validateRacingCountInput,
} from "./validateCondition.js";

export function carNamesSubmitHandler(play) {
  const carNamesInput = document.querySelector("#car-names-input");
  if (validateCarInput(carNamesInput.value)) {
    showCountTags();
    play.carNames = carNamesInput.value.trim().split(",");
  } else {
    carNamesInput.value = "";
    carNamesInput.focus();
  }
}

export function init(play, racingCountInput) {
  play.car = [];
  play.count = racingCountInput;
  for (let i = 0; i < play.carNames.length; i++) {
    play.car.push(new Car(play.carNames[i]));
  }
}
export function racingCountSubmitHandler(play) {
  const racingCountInput = document.querySelector("#racing-count-input");
  clearResultDiv();
  if (validateRacingCountInput(racingCountInput.value)) {
    showResultTags();
    init(play, racingCountInput.value);
    play.racing();
    play.racingEnd();
    printResult(play.winner);
  } else {
    racingCountInput.value = "";
    racingCountInput.focus();
  }
}
