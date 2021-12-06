import {
  ID_CAR_NAMES_INPUT,
  ID_CAR_NAMES_SUBMIT,
} from '../constant/selector.js';
import { INPUT_NAME_ERROR } from '../constant/error.js';
import {
  checkNameLength,
  checkEmptyName,
  checkDuplicateName,
} from '../utils/validation.js';

export default class CarNameForm {
  constructor() {
    this.$input = document.getElementById(ID_CAR_NAMES_INPUT);
    this.$submit = document.getElementById(ID_CAR_NAMES_SUBMIT);
  }

  addSubmitClickEventHandler(handler) {
    this.$submit.addEventListener('click', handler);
  }

  processInputValue() {
    const carNames = this.$input.value.split(',').map((name) => {
      return name.trim();
    });

    return carNames;
  }

  checkValidInputValue(carNames) {
    const checkingResults = [
      checkNameLength(carNames),
      checkEmptyName(carNames),
      checkDuplicateName(carNames),
    ];

    const isAllPass = checkingResults.every((result) => result);

    if (!isAllPass) {
      this.handleException(checkingResults);
    }

    return isAllPass;
  }

  handleException(checkingResults) {
    const errorCode = checkingResults.indexOf(false);
    const errorMessage = INPUT_NAME_ERROR[errorCode];

    alert(errorMessage);
    this.$input.focus();
  }
}
