import { clearInput } from "./utils/input-utils.js";
import isValidCarName, { isValidRacingCount } from "./input-validator.js";
import show, { disableBtn } from "./utils/display-utils.js";
import Car from "./domain/car.js";

const carNameBtn = document.getElementById("car-names-submit");
const carNameInput = document.getElementById("car-names-input");

const racingCountBtn = document.getElementById("racing-count-submit");
const racingCountInput = document.getElementById("racing-count-input");
const racingCarContainer = document.getElementById("racing-car");

const resultContainer = document.getElementById("result");

export default function RacingCarGame() {
  carNameBtn.addEventListener("click", () => {
    const carName = carNameInput.value;
    const carNameArray = carName.split(",");

    if (isValidCarName(carName)) {
      let carArray = [];
      show(racingCarContainer);
      disableBtn(carNameBtn);

      for (let i = 0; i < carNameArray.length; i++) {
        carArray.push(new Car(carNameArray[i]));
      }
    } else {
      clearInput(carNameInput);
    }
  });

  racingCountBtn.addEventListener("click", () => {
    const racingCount = racingCountInput.value;

    if (isValidRacingCount(racingCount)) {
      show(resultContainer);
      disableBtn(racingCountBtn);
    } else {
      clearInput(racingCountInput);
    }
  });
}

new RacingCarGame();
