import Car from './car.js';
import { displayElement, requestInputAgain } from './util.js';
import {
  CAR_NAME_SEPARATOR,
  CAR_NAME_LENGTH_LIMIT,
  ALERT_MESSAGES,
} from './config.js';

export const handleCarNames = () => {
  const racingCountSubmit = document.querySelectorAll('#app button')[1];
  const carNamesInput = document.querySelector('#app input');
  const carNames = carNamesInput.value.split(CAR_NAME_SEPARATOR);
  const error = isErrorCarNames(carNames);

  if (error) {
    return requestInputAgain(ALERT_MESSAGES[error], carNamesInput);
  }
  displayRacingCountTags();
  racingCountSubmit.cars = createCars(carNames);
};

const isErrorCarNames = (carNames) => {
  for (let name of carNames) {
    if (name.length == 0 || name.replace(' ', '').length == 0) {
      return 'nameTooShort';
    }
    if (name.length > CAR_NAME_LENGTH_LIMIT) {
      return 'nameTooLong';
    }
  }
  if (carNames.length <= 1) {
    return 'namesOnlyOne';
  }
  if (carNames.length !== new Set(carNames).size) {
    return 'namesRedundant';
  }
  return false;
};

const createCars = (carNames) => {
  let cars = [];

  carNames.forEach((name) => cars.push(new Car(name)));
  return cars;
};

const displayRacingCountTags = () => {
  const racingCountInput = document.querySelectorAll('#app input')[1];

  displayElement('#racing-count-header', 'block');
  displayElement('#racing-count-input', 'inline-block');
  displayElement('#racing-count-submit', 'inline-block');
  racingCountInput.focus();
};
