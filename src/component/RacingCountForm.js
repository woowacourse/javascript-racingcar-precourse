import {
  ID_RACING_COUNT_INPUT,
  ID_RACING_COUNT_SUBMIT,
} from '../constant/selector.js';
import { INPUT_RACING_COUNT_ERROR } from '../constant/error.js';
import { checkExistingCar, checkValidNumber } from '../utils/validation.js';
import Form from './Form.js';

export default class RacingCountForm extends Form {
  constructor() {
    super(ID_RACING_COUNT_INPUT, ID_RACING_COUNT_SUBMIT);
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
      this.handleException(checkingResults, INPUT_RACING_COUNT_ERROR);
    }

    return isAllPass;
  }
}
