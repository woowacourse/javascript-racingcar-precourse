import { getValidateNames, getValidateCount } from './validateInput.js';

const $carNamesInput = document.querySelector('#car-names-input');
const $carNamesSubmit = document.querySelector('#car-names-submit');
const $racingCountInput = document.querySelector('#racing-count-input');
const $racingCountSubmit = document.querySelector('#racing-count-submit');

function Car(name) {
  this.name = name;
}

export function getRacingCountInput() {
  const racingCount = $racingCountInput.value;

  if (getValidateCount(Number(racingCount))) {
    $racingCountInput.readOnly = true;
    $racingCountSubmit.disabled = true;
    return racingCount;
  }
  return false;
}

export function getCarNamesInput() {
  const carNames = $carNamesInput.value.split(',');

  if (getValidateNames(carNames)) {
    $carNamesInput.readOnly = true;
    $carNamesSubmit.disabled = true;

    const cars = carNames.map(name => new Car(name));

    cars.forEach(car => (car.count = 0));
    return cars;
  }
  return false;
}
