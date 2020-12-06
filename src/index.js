import { clearInput } from "./utils/input-utils.js";
import { isValidCarName, isValidRacingCount } from "./input-validator.js";
import { show, disableBtn } from "./utils/display-utils.js";
import { Car } from "./domain/car.js";

const state = {
  carArray: [],
};

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
      show(racingCarContainer);
      disableBtn(carNameBtn);

      for (let i = 0; i < carNameArray.length; i++) {
        state.carArray.push(new Car(carNameArray[i]));
      }
    } else {
      clearInput(carNameInput);
    }
  });

  racingCountBtn.addEventListener("click", () => {
    const racingCount = racingCountInput.value;
    const carArray = state.carArray;

    if (isValidRacingCount(racingCount)) {
      show(resultContainer);
      disableBtn(racingCountBtn);

      for (let i = 0; i < racingCount; i++) {
        for (let n = 0; n < carArray.length; n++) {
          if (carArray[n].canMove()) {
            carArray[n].move();
          }
        }
        console.log(carArray);
      }
    } else {
      clearInput(racingCountInput);
    }
  });
}

new RacingCarGame();
