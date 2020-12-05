import { validateCarInput } from "./validateCondition.js";
import Car from "./Car.js";
export function carNamesSubmitHandler(play) {
  const carNamesInput = document.querySelector("#car-names-input");
  if (validateCarInput(carNamesInput.value)) {
    let carsArr = carNamesInput.value.trim().split(",");
    for (let i = 0; i < carsArr.length; i++) {
      play.car.push(new Car(carsArr[i]));
    }
  } else {
    carNamesInput.value = "";
    carNamesInput.focus();
  }
}
