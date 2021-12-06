import { $, $$ } from '../utils/dom.js';
import TryCountValidator from '../validators/TryCountValidator.js';
import { DOM, ERROR } from '../constants.js';

class RacingTryCountForm {
  constructor() {
    // eslint-disable-next-line prefer-destructuring
    this.$title = $$('h4')[0];
    this.$input = $(`#${DOM.RACING_COUNT_INPUT}`);
    this.$submit = $(`#${DOM.RACING_COUNT_SUBMIT}`);
    this.$tryCount = 0;
  }

  setTryCount() {
    this.$tryCount = this.$input.value;
  }

  getTryCount() {
    return this.$tryCount;
  }

  hide() {
    this.$input.style.display = 'none';
    this.$submit.style.display = 'none';
    this.$title.style.display = 'none';
  }

  render() {
    this.$input.style.display = '';
    this.$submit.style.display = '';
    this.$title.style.display = '';
  }

  validateTryCount() {
    if (!TryCountValidator.checkExistTryCount(this.$tryCount)) {
      return alert(ERROR.TRY_COUNT_REQUIRED);
    }

    if (!TryCountValidator.checkTryCountLessThanZero(this.$tryCount)) {
      return alert(ERROR.TRY_COUNT_HAVE_TO_OVER_ZERO);
    }

    return true;
  }

  checkExistTryCount() {
    return !!this.$tryCount;
  }
}

export default RacingTryCountForm;
