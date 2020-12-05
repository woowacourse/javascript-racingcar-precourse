import Car from "./Car.js";
import { showCountTags, showResultTags } from "./controlTags.js";
import {
  validateCarInput,
  validateRacingCountInput,
} from "./validateCondition.js";

export function carNamesSubmitHandler(play) {
  const carNamesInput = document.querySelector("#car-names-input");
  if (validateCarInput(carNamesInput.value)) {
    let carsArr = carNamesInput.value.trim().split(",");
    for (let i = 0; i < carsArr.length; i++) {
      play.car.push(new Car(carsArr[i]));
    }
    showCountTags();
  } else {
    carNamesInput.value = "";
    carNamesInput.focus();
  }
}

export function racingCountSubmitHandler(play) {
  const racingCountInput = document.querySelector("#racing-count-input");
  if (validateRacingCountInput(racingCountInput.value)) {
    showResultTags();
    play.count = racingCountInput.value;
    // console.log("1==> ", play.car);
    play.racing();
    // console.log(play.count);
  } else {
    racingCountInput.value = "";
    racingCountInput.focus();
  }
}
