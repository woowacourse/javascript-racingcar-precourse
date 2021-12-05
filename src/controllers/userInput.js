import { makeStringToArrayByComma } from "./utils.js";

export function carNamesInput(e) {
  e.preventDefault();
  const $carNamesInput = document.getElementById("car-names-input");

  const cars = makeStringToArrayByComma($carNamesInput.value);
  console.log(cars);
}
