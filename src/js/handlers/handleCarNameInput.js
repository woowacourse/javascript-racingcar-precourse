import $ from '../utils/dom.js';
import renderCountInput from '../views/renderCountInput.js';
import alertCarInputError from '../views/alertCarInputError.js';
import resetCarInput from '../views/resetCarInput.js';
import disableCarInput from '../views/disableCarInput.js';

const isOverFive = carInput => {
  carInput = carInput.split(',').map(car => car.trim());
  if (carInput.some(car => car.length > 5)) {
    return true;
  }
  return false;
};

const isDuplicate = carInput => {
  carInput = carInput.split(',').map(car => car.trim());
  if (carInput.length !== new Set(carInput).size) {
    return true;
  }
  return false;
};

const isValidCarInput = carInput => {
  if (carInput.length === 0 || isOverFive(carInput) || isDuplicate(carInput)) {
    return false;
  }
  return true;
};

const handleCarNameInput = () => {
  const carInput = $('#car-names-input').value;
  if (isValidCarInput(carInput)) {
    renderCountInput();
    disableCarInput();
    return;
  }
  alertCarInputError(carInput);
  resetCarInput();
};

export default handleCarNameInput;
