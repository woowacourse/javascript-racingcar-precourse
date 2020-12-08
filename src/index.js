import { clearInput } from "./utils/input-utils.js";
import { isValidCarName, isValidRacingCount } from "./input-validator.js";
import { show, disableBtn } from "./utils/display-utils.js";
import { Car } from "./domain/car.js";
import { printFinalResult } from "./print-messages.js";

export const resultContainer = document.getElementById("result");
export const state = {
  carArray: []
};

const carNameBtn = document.getElementById("car-names-submit");
const carNameInput = document.getElementById("car-names-input");
const racingCountBtn = document.getElementById("racing-count-submit");
const racingCountInput = document.getElementById("racing-count-input");
const racingCarContainer = document.getElementById("racing-car");

function racingCarGame() {
  carNameBtn.addEventListener("click", () => {
    makeNewCar();
  });

  racingCountBtn.addEventListener("click", () => {
    raceCar();
  });
}

function makeNewCar() {
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

function raceCar() {
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
