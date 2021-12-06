import {
  isBlank,
  isIncludeSpace,
  isDuplicated,
  splitUsingComma,
  isOverFiveLetters,
  hasEmptyElement,
  isZero,
  hasSpecial,
} from './utils.js';
import { ERROR } from './constants.js';

export const isValidCarNames = string => {
  if (isBlank(string)) return alert(ERROR.BLANK_SUBMIT);
  if (isIncludeSpace(string)) return alert(ERROR.INCLUDE_SPACE);

  const carNamesArray = splitUsingComma(string);
  if (isDuplicated(carNamesArray)) return alert(ERROR.DUPLICATED);
  if (isOverFiveLetters(carNamesArray)) return alert(ERROR.OVER_FIVE_LETTERS);
  if (hasEmptyElement(carNamesArray)) return alert(ERROR.HAS_EMPTY_ELEMENT);

  return true;
};

export const isValidRacingCount = string => {
  if (isBlank(string)) return alert(ERROR.BLANK_SUBMIT);
  if (isZero(string)) return alert(ERROR.NOT_POSIVITE_INT);
  if (hasSpecial(string)) return alert(ERROR.INCLUDE_SPECIAL);

  return true;
};
