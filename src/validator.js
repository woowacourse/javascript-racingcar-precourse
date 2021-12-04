import {
  ERROR_MESSAGE,
  CAR_NAME_MIN_LENGTH,
  CAR_NAME_MAX_LENGTH,
} from './constants.js';

export default class Validator {
  static isValidCarNames(carNames) {
    const { CAR_NAMES } = ERROR_MESSAGE;
    const carNameArr = carNames.split(',');
    const validCarNameArr = carNameArr.filter((carName) => {
      return !(carName.length < CAR_NAME_MIN_LENGTH || carName.length > CAR_NAME_MAX_LENGTH);
    });
    const isValid = carNameArr.length === validCarNameArr.length;
    return { isValid, message: isValid ? null : CAR_NAMES };
  }
}