import {isEmpty, isOutOfLength, isDuplicate} from './util.js';

class InputValidator {
  isValidCarNames(carNames) {
    if (isEmpty(carNames) || isOutOfLength(carNames)|| isDuplicate(carNames)) {
      return false;
    }

    return true;
  }

  isValidRacingCount(racingCount) {
    if (racingCount < 1 || racingCount > 1000) return false;

    return true;
  }
}

const inputValidator = new InputValidator();

export const {isValidCarNames, isValidRacingCount} = inputValidator;
