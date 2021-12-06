import { $ } from '../utils/dom.js';
import CarNameValidator from '../validators/CarNameValidator.js';
import { DOM, ERROR } from '../constants.js';

class RacingCountForm {
  constructor() {
    this.$input = $(`#${DOM.CAR_NAMES_INPUT}`);
    this.$submit = $(`#${DOM.CAR_NAMES_SUBMIT}`);
  }

  validateCarNames(names) {
    if (!CarNameValidator.checkAtLeastOneCar(names)) {
      return alert(ERROR.CAR_NAME_REQUIRED);
    }

    if (!CarNameValidator.checkCarNameDuplicated(names)) {
      return alert(ERROR.CAR_NAME_DUPLICATED);
    }

    if (!CarNameValidator.checkCarNameUnderFiveLetter(names)) {
      return alert(ERROR.CAR_NAME_HAVE_TO_UNDER_FIVE_LETTER);
    }

    return true;
  }

  getSplittedCarNames() {
    return this.$input.value.split(',');
  }
}

export default RacingCountForm;
