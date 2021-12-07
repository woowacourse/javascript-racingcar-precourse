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
import Form from './Form.js';

export default class CarNameForm extends Form {
  constructor() {
    super(ID_CAR_NAMES_INPUT, ID_CAR_NAMES_SUBMIT);
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
      this.handleException(checkingResults, INPUT_NAME_ERROR);
    }

    return isAllPass;
  }
}
