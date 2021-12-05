import $ from '../utils/dom.js';
import { CAR, ERROR } from '../utils/constants.js';
import renderCountInput from '../views/renderCountInput.js';
import alertInputError from '../views/alertInputError.js';
import { resetCarInput } from '../views/resetInput.js';
import { disableCarInput } from '../views/disableInput.js';
import focusInput from '../views/focusInput.js';

export const isOverFive = carInput => {
  carInput = carInput.split(',').map(car => car.trim());

  if (carInput.some(car => car.length > CAR.MAX_LENGTH)) {
    return true;
  }
  return false;
};

export const isDuplicate = carInput => {
  carInput = carInput.split(',').map(car => car.trim());

  if (carInput.length !== new Set(carInput).size) {
    return true;
  }
  return false;
};

const isValidCarInput = carInput => {
  if (carInput.length < CAR.MIN_INPUT) {
    alertInputError(ERROR.INPUT_BLANK);
    return false;
  }
  if (isOverFive(carInput)) {
    alertInputError(ERROR.OVER_MAX_LENGTH);
    return false;
  }
  if (isDuplicate(carInput)) {
    alertInputError(ERROR.NAME_DUPLICATE);
    return false;
  }
  return true;
};

const handleCarNameInput = () => {
  const carInput = $('#car-names-input').value;

  if (isValidCarInput(carInput)) {
    disableCarInput();
    renderCountInput();
    focusInput($('#racing-count-input'));
    return;
  }
  resetCarInput();
};

export default handleCarNameInput;
