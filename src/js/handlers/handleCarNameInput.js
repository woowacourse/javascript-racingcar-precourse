import $ from '../utils/dom.js';
import renderCountInput from '../views/renderCountInput.js';
import { alertCarInputError } from '../views/alertInputError.js';
import { resetCarInput } from '../views/resetInput.js';
import { disableCarInput } from '../views/disableInput.js';
import { CAR, ERROR } from '../utils/constants.js';

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
    alertCarInputError(ERROR.INPUT_BLANK);
    return false;
  }
  if (isOverFive(carInput)) {
    alertCarInputError(ERROR.OVER_MAX_LENGTH);
    return false;
  }
  if (isDuplicate(carInput)) {
    alertCarInputError(ERROR.NAME_DUPLICATE);
    return false;
  }
  return true;
};

const handleCarNameInput = () => {
  const carInput = $('#car-names-input').value;
  if (isValidCarInput(carInput)) {
    renderCountInput();
    disableCarInput();
    $('#racing-count-input').focus();
    return;
  }
  resetCarInput();
};

export default handleCarNameInput;
