import {
  validateInputsLength,
  validateInputsUnique,
  validateNaturalNumber,
} from "../common/validate.js";
import { trimStringSpace, convertStringToArray } from "../common/util.js";
import { alertMessage } from "../common/message.js";
const { INVALID_LENGTH_MESSAGE, DUPLICATE_NAME_MESSAGE, INVALID_NUMBER_MESSAGE } = alertMessage;

export default class InputHandler {
  constructor() {
    this.carNameInputField = document.getElementById("car-names-input");
    this.racingCountInputField = document.getElementById("racing-count-input");
  }

  getCarNamesInput() {
    const carNamesInput = this.carNameInputField.value;
    return carNamesInput;
  }

  parseCarNames(carNamesInput) {
    const carNamesString = trimStringSpace(carNamesInput); // 공백제거
    const carNames = convertStringToArray(carNamesString);
    return carNames;
  }

  validateCarNames(carNames) {
    const isValidLength = validateInputsLength(carNames);
    const isUnique = validateInputsUnique(carNames);
    const isValid = isValidLength && isUnique;

    if (!isValidLength) {
      alert(INVALID_LENGTH_MESSAGE);
      return;
    }

    if (!isUnique) {
      alert(DUPLICATE_NAME_MESSAGE);
    }

    return isValid;
  }

  getRacingCountInput() {
    const racingCountInput = this.racingCountInputField.value;
    return racingCountInput;
  }

  validateRacingCount(number) {
    const isValidNumber = validateNaturalNumber(number);

    if (!isValidNumber) {
      alert(INVALID_NUMBER_MESSAGE);
    }

    return isValidNumber;
  }
}
