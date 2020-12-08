import { createCar } from './create.js';
import { isAvailableNames, isAvailableNumber } from './check.js';

export function getCarNamesInput() {
  const carNamesSubmit = document.querySelector("#car-names-submit");
  carNamesSubmit.addEventListener("click", () => {
    const carNamesInput = document.querySelector("#car-names-input").value.split(",");

      if (isAvailableNames(carNamesInput) === true) {
        return carNamesInput
      }
  });
}

export function getRacingCountInput() {
  const racingCountSubmit = document.querySelector("#racing-count-submit");
  racingCountSubmit.addEventListener("click", () => {
    const racingCountInput = isAvailableNumber();
    const carNamesInput = document.querySelector("#car-names-input").value.split(",");

    if (carNamesInput && racingCountInput) {
      const resultDiv = document.querySelector("#result-div");
      resultDiv.style.display = "block";
      createCar(carNamesInput, racingCountInput);
    }
  });
}