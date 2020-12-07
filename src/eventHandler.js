import Car from "./Car.js";
import { printResult } from "./printResult.js";
import { validateCarInput, validateRacingCountInput } from "./validateInput.js";
import {
  showCountTags,
  showResultTags,
  clearResultDiv,
} from "./controlTags.js";

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
  //버튼을 누를때 마다  재 셋팅 함수
  play.carArr = [];
  play.count = racingCountInput;
  play.carNames.map((v) => {
    play.carArr.push(new Car(v));
  });
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
