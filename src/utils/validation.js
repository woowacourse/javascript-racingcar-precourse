import { CAR_NAMES, MAX_CAR_NAME_LENGTH, RACING_COUNT } from './constants.js';

const isEmpty = (inputValue) => {
  return inputValue === '';
};

const isContainsBlankName = (carNamesInput) => {
  const carNamesArray = carNamesInput.split(',');

  return carNamesArray.some((carName) => carName.replace(/ /g, '').length === 0);
};

const isLongerThanFiveLetters = (carNamesInput) => {
  return carNamesInput.split(',').some((carName) => carName.length > MAX_CAR_NAME_LENGTH);
};

const isDuplicate = (carNamesInput) => {
  const carNamesArray = carNamesInput.split(',');

  return carNamesArray.length !== new Set(carNamesArray).size;
};

const isIntegerInValid = (racingCountInput) => {
  return !Number.isInteger(Number(racingCountInput));
};

const isSameOrLessZero = (racingCountInput) => {
  return Number(racingCountInput) <= 0;
};

const showErrorMessage = (message) => {
  alert(message);
  return false;
};

const isValidateCarNames = (carNamesInput) => {
  if (isEmpty(carNamesInput)) {
    return showErrorMessage(CAR_NAMES.EMPTY_ERROR_MESSAGE);
  }

  if (isContainsBlankName(carNamesInput)) {
    return showErrorMessage(CAR_NAMES.BLANK_ERROR_MESSAGE);
  }

  if (isLongerThanFiveLetters(carNamesInput)) {
    return showErrorMessage(CAR_NAMES.LENGTH_ERROR_MEESSAGE);
  }

  if (isDuplicate(carNamesInput)) {
    return showErrorMessage(CAR_NAMES.DUPLICATE_ERROR_MESSSAGE);
  }

  return true;
};

const isValidateRacingCount = (racingCountInput) => {
  if (isEmpty(racingCountInput)) {
    return showErrorMessage(RACING_COUNT.EMPTY_ERROR_MESSAGE);
  }

  if (isIntegerInValid(racingCountInput)) {
    return showErrorMessage(RACING_COUNT.TYPE_ERROR_MESSAGE);
  }

  if (isSameOrLessZero(racingCountInput)) {
    return showErrorMessage(RACING_COUNT.RANGE_ERROR_MESSAGE);
  }

  return true;
};

export { isValidateCarNames, isValidateRacingCount };
