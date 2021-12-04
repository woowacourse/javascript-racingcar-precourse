import { GAME, ERR_MESSAGE } from '../utils/constant.js';
import { makeObjectCars } from '../init/cars.js';
import { showCountInput } from '../init/setScreen.js';

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

  if (!isValidCarNames(carNames)) {
    $carNamesInput.value = '';
    return;
  }

  makeObjectCars(carNames);
  showCountInput();
}
