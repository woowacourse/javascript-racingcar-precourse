import { ERROR, CONSTANT_NUM } from './constants.js';

export const validateCarNamesInput = (carNames) => {
  let WHICH_ERROR = ERROR.NONE;
  let validCarNames = new Set([]);
  carNames.forEach((carName) => {
    if (carName.length > CONSTANT_NUM.CAR_NAME_MAX || carName.length < 1) {
      WHICH_ERROR = ERROR.NUM_OF_INPUT;
      return WHICH_ERROR;
    }
    if (findDuplicatedName(carName, validCarNames)) {
      WHICH_ERROR = ERROR.DUPLICATED_INPUT;
    }
  });

  return WHICH_ERROR;
};

const findDuplicatedName = (carName, validCarNames) => {
  if (!validCarNames.has(carName)) {
    validCarNames.add(carName);
  } else {
    return ERROR.DUPLICATED_INPUT;
  }
};

export const validateRacingCountInput = (count) => {
  if (Number.isNaN(parseInt(count))) {
    return ERROR.NOT_A_NUMBER;
  }
  if (count < 1) {
    return ERROR.NUM_OF_TRIES;
  }

  return ERROR.NONE;
};
