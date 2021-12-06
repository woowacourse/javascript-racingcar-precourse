import { ERROR_MESSAGE } from '../constants/errorMessage.js';

export const isValidCarName = (carNames) => {
  let valid = {
    isValid: false,
    errorMessage: '',
  };

  if (isDuplicate(carNames)) {
    valid.errorMessage = `${ERROR_MESSAGE.DUPLICATE}`;
    return valid;
  }
  if (isLessThanTwoCars(carNames)) {
    valid.errorMessage = `${ERROR_MESSAGE.LESS}`;
    return valid;
  }
  for (const carName of carNames) {
    if (isEmpty(carName)) {
      valid.errorMessage = `${ERROR_MESSAGE.EMPTY}`;
      return valid;
    }
    if (!isValidLength(carName)) {
      valid.errorMessage = `${ERROR_MESSAGE.LENGTH}`;
      return valid;
    }
  }

  valid.isValid = true;
  return valid;
};

export const isValidRacingCount = (racingCount) => {
  if (racingCount < 1) {
    return false;
  }
  if (!Number.isInteger(racingCount)) {
    return false;
  }

  return true;
};

const isValidLength = (carName) => carName.length <= 5 && carName.length >= 1;
const isEmpty = (carName) => !carName;
const isDuplicate = (carNames) => carNames.length !== new Set(carNames).size;
const isLessThanTwoCars = (carNames) => carNames.length < 2;
