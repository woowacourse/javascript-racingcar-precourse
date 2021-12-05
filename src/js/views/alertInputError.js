import { CAR, COUNT, ERROR } from '../utils/constants.js';

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

export const alertCarInputError = carInput => {
  if (carInput.length < CAR.MIN_INPUT) {
    alert(ERROR.INPUT_BLANK);
  } else if (isOverFive(carInput)) {
    alert(ERROR.OVER_MAX_LENGTH);
  } else if (isDuplicate(carInput)) {
    alert(ERROR.NAME_DUPLICATE);
  }
};

export const alertCountInputError = countInput => {
  if (countInput === '') {
    alert(ERROR.INPUT_BLANK);
  } else if (Number(countInput) < COUNT.MIN_NUM) {
    alert(ERROR.UNDER_MIN_NUM);
  }
};
