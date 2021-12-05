import { $, $$ } from '../utils/dom.js';
import TryCountValidator from '../validators/TryCountValidator.js';

class RacingTryCountForm {
  constructor() {
    // eslint-disable-next-line prefer-destructuring
    this.$title = $$('h4')[0];
    this.$input = $('#racing-count-input');
    this.$submit = $('#racing-count-submit');
    this.$tryCount = 0;
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
    if (!TryCountValidator.checkTryCountLessThanZero(this.$tryCount))
      return alert('시도 횟수는 0보다 커야합니다.');
    return true;
  }

  getTryCount() {
    this.$tryCount = this.$input.value;
  }
}

export default RacingTryCountForm;
