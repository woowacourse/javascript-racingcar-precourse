import { ERROR, DONE } from '../data/constants.js';
import {
  isOnlyNumbers,
  isWithComma,
  isLengthLimit,
  isUniqueWord,
} from '../utils/validator.js';
import splitWithoutMargin from '../utils/split.js';

export const checkNameVaild = (userInput) => {
  if (isWithComma(userInput) === false) {
    return ERROR.USERINPUT_NEED_COMMA;
  }

  const names = splitWithoutMargin(userInput, ',');
  if (isLengthLimit(names, 1, 5) === false) {
    return ERROR.USERINPUT_LENGTH_LIMIT;
  }

  if (isUniqueWord(names) === false) {
    return ERROR.USERINPUT_UNIQUE_NAME;
  }
  return DONE.USERINPUT_NAME;
};

export const checkCountVaild = (userInput) => {
  if (userInput === '' || isOnlyNumbers(userInput) === false) {
    return ERROR.USERINPUT_COUNT_NUMBER_ONLY;
  }

  return DONE.USERINPUT_COUNT;
};
