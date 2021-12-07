import { ERROR_MESSAGE, FORWARD_NUMBER_SIGN } from '../lib/constants.js';
import {
  getRandomNumber,
  hasSomeStringIncludeSpace,
  hasSomeStringLengthGreaterThanFive,
  hasStringDuplicated,
  isNegativeNumberOrZero,
} from '../lib/utils.js';
import Car from './car.js';

class CarGameUtil {
  static generateCars(namesArray) {
    if (CarGameUtil.isValidCarNames(namesArray)) {
      return namesArray.map((name, index) => new Car(name, index));
    }

    return null;
  }

  static isValidCarNames(namesArray) {
    if (hasSomeStringIncludeSpace(namesArray)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_INCLUDE_SPACE);
    }
    if (hasSomeStringLengthGreaterThanFive(namesArray)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH_GREATHER_THAN_FIVE);
    }
    if (hasStringDuplicated(namesArray)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATED);
    }

    return true;
  }

  static isValidNumber(number) {
    if (isNegativeNumberOrZero(number)) {
      throw new Error(ERROR_MESSAGE.COUNT_NEGATIVE_NUMBER_OR_ZERO);
    }

    return true;
  }

  static isForward() {
    return getRandomNumber() >= FORWARD_NUMBER_SIGN;
  }

  static getWinnerCount(cars) {
    return Math.max(...cars.map((car) => car.count));
  }
}
export default CarGameUtil;
