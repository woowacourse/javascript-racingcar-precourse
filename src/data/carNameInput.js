import { $ } from '../utils/dom.js';
import { MAX_CAR_NAME_LENGTH } from './constatns.js';
import { Car } from './Car.js';

const isNonInput = () => $('#car-names-input').value == '';

const isValidLength = () =>
  $('#car-names-input')
    .value.split(',')
    .every((carName) => carName.length <= MAX_CAR_NAME_LENGTH);

const getCarNames = () => {
  return $('#car-names-input').value.split(',');
};

const genCarInstances = () => {
  return getCarNames().map((carName) => new Car(carName));
};

export { isNonInput, isValidLength, genCarInstances };
