import {
  ID_RACING_COUNT_INPUT,
  ID_RACING_COUNT_SUBMIT,
} from '../constant/selector.js';
import { INPUT_RACING_COUNT_ERROR } from '../constant/error.js';
import { checkExistingCar, checkValidNumber } from '../utils/validation.js';

export default class RacingCountForm {
  constructor() {
    this.$input = document.getElementById(ID_RACING_COUNT_INPUT);
    this.$submit = document.getElementById(ID_RACING_COUNT_SUBMIT);
  }

  addSubmitClickEventHandler(handler) {
    this.$submit.addEventListener('click', handler);
  }

  getInputValue() {
    return this.$input.value;
  }

  checkValidInputValue(cars, racingCount) {
    const checkingResults = [
      checkExistingCar(cars),
      checkValidNumber(racingCount),
    ];

    const isAllPass = checkingResults.every((result) => result);

    if (!isAllPass) {
      this.handleException(checkingResults);
    }

    return isAllPass;
  }

  handleException(checkingResults) {
    const errorCode = checkingResults.indexOf(false);
    const errorMessage = INPUT_RACING_COUNT_ERROR[errorCode];

    alert(errorMessage);
    this.$input.focus();
  }
}
