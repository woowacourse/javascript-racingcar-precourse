import { clearInput } from "./utils/input-utils.js";
import { isValidCarName, isValidRacingCount } from "./input-validator.js";
import { show, disableBtn } from "./utils/display-utils.js";
import { Car } from "./domain/car.js";
import { printFinalResult } from "./print-messages.js";

export const carNameBtn = document.getElementById("car-names-submit");
export const carNameInput = document.getElementById("car-names-input");
export const racingCountBtn = document.getElementById("racing-count-submit");
export const racingCountInput = document.getElementById("racing-count-input");
export const racingCarContainer = document.getElementById("racing-car");
export const resultContainer = document.getElementById("result");
export const state = {
  carArray: []
};

export function racingCarGame() {
  carNameBtn.addEventListener("click", () => {
    makeNewCar();
  });

  racingCountBtn.addEventListener("click", () => {
    raceCar();
  });
}

export function makeNewCar() {
  const carName = carNameInput.value;
  const carNameArray = carName.split(",");

  if (isValidCarName(carName)) {
    show(racingCarContainer);
    disableBtn(carNameBtn);

    for (let i = 0; i < carNameArray.length; i++) {
      state.carArray.push(new Car(carNameArray[i]));
    }
  } else {
    clearInput(carNameInput);
  }
}

export function raceCar() {
  const racingCount = racingCountInput.value;

  if (isValidRacingCount(racingCount)) {
    show(resultContainer);
    disableBtn(racingCountBtn);
    printFinalResult(racingCount);
  } else {
    clearInput(racingCountInput);
  }
}

new racingCarGame();
