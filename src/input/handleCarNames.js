import { GAME, ERR_MESSAGE } from '../utils/constant.js';

function Car(name) {
  this.name = name;
  this.count = 0;
}

function makeObjectCars(carNames) {
  const carObject = carNames.map((name) => new Car(name));
  return carObject;
}

function isValidLength(name) {
  return name.length <= GAME.MAX_CAR_NAME_LENGTH;
}

function isBlank(name) {
  return name.length >= GAME.MIN_CAR_NAME_LENGTH;
}

function isValidCarNames(carNames) {
  if (!carNames.every(isValidLength)) {
    return alert(ERR_MESSAGE.NAME_TOO_LONG);
  }
  if (!carNames.every(isBlank)) {
    return alert(ERR_MESSAGE.NAME_CANNOT_BE_BLANK);
  }
  return true;
}

export default function handleCarNamesSubmit(event) {
  event.preventDefault();
  const $carNamesInput = document.querySelector('#car-names-input');
  const carNames = $carNamesInput.value.split(',').map((car) => car.trim());
  console.log(carNames);

  if (!isValidCarNames(carNames)) {
    $carNamesInput.value = '';
    return;
  }

  makeObjectCars(carNames);
}
