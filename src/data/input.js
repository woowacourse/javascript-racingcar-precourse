import { $ } from '../utils/dom.js';
import { MAX_CAR_NAME_LENGTH } from './constatns.js';

const isNonInput = () => $('#car-names-input').value == '';

const isValidLength = () =>
  $('#car-names-input')
    .value.split(',')
    .every((carName) => carName.length <= MAX_CAR_NAME_LENGTH);

export { isNonInput, isValidLength };
