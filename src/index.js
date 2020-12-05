import { clearInput } from "./utils/input-utils.js";
import isValidCarName from "./input-validator.js";
import show, { disableBtn } from "./utils/display-utils.js";
import Car from "./domain/car.js";

const carNameBtn = document.getElementById("car-names-submit");
const carNameInput = document.getElementById("car-names-input");

const racingCarContainer = document.getElementById("racing-car");

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

      console.log(carArray);
    } else {
      clearInput(carNameInput);
    }
  });
}

new RacingCarGame();
