import { $ } from '../utils/dom.js';
import { MAX_CAR_NAME_LENGTH } from '../utils/constants.js';
import { Car } from './Car.js';

export const isNonCarNames = () => $('#car-names-input').value == '';
export const isValidLength = () =>
  $('#car-names-input')
    .value.split(',')
    .every((carName) => carName.length <= MAX_CAR_NAME_LENGTH);

const getCarNames = () => {
  return $('#car-names-input').value.split(',');
};

export const genCarInstances = () => {
  return getCarNames().map((carName) => new Car(carName));
};
