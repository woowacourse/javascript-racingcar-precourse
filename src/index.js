import Car from './car.js';
import { ERROR_MESSAGE } from './constants.js';
import { on, qs } from './utils.js';

const carNamesInput = qs('#car-names-input');
const carNamesSubmitButton = qs('#car-names-submit');

on(carNamesSubmitButton, 'click', (event) => {
  event.preventDefault();

  const carNamesArr = carNamesInput.value.split(',');
  const flag = checkOverFiveLetters(carNamesArr);
  if (!flag) {
    alert(ERROR_MESSAGE.OVER_FIVE_LETTERS);
    return;
  }
  const cars = carNamesArr.map((name) => new Car(name));
  console.log(cars);
}); 

function checkOverFiveLetters(cars) {
  for (const name of cars) {
    if (name.length > 5) return false;
  }
  return true;
}
