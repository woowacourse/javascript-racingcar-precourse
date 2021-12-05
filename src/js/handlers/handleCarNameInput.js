import $ from '../utils/dom.js';
import renderCountInput from '../views/renderCountInput.js';
import { isOverFive, isDuplicate, alertCarInputError } from '../views/alertInputError.js';
import resetCarInput from '../views/resetCarInput.js';
import { disableCarInput } from '../views/disableInput.js';
import { CAR } from '../utils/constants.js';

const isValidCarInput = carInput => {
  if (carInput.length < CAR.MIN_INPUT || isOverFive(carInput) || isDuplicate(carInput)) {
    alertCarInputError(carInput);
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
