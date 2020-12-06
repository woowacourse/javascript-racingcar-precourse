import { createCar } from './create.js'
import { isAvailableLength, isSpecialCharacter } from './check.js'

export function getCarNamesInput() {
  const carNamesSubmit = document.querySelector("#car-names-submit");
  carNamesSubmit.addEventListener("click", () => {
    const carNamesInput = document.querySelector("#car-names-input").value;

    if (isSpecialCharacter(carNamesInput) === false && isAvailableLength(carNamesInput) === true) {
      const racingCountDiv = document.querySelector("#racing-count-div")
      racingCountDiv.style.display = 'block';

      return carNamesInput;
    } else {
      alert("5자 이하의 문자를, 공백 없이, 콤마로 구분하여 입력해 주세요.");
    }			
  }); 
}

export function getRacingCountInput() {
  const racingCountSubmit = document.querySelector("#racing-count-submit");
  racingCountSubmit.addEventListener("click", () => {
    const racingCountInput = document.querySelector("#racing-count-input").value;
    const carNamesInput = document.querySelector("#car-names-input").value.split(",");

    if (carNamesInput && racingCountInput) {
      const resultDiv = document.querySelector("#result-div");
      resultDiv.style.display = "block"
      createCar(carNamesInput, racingCountInput);
    }
  });
}