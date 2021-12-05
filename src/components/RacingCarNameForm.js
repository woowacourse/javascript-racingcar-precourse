import { $ } from '../utils/dom.js';
import CarNameValidator from '../validators/CarNameValidator.js';

class RacingCountForm {
  constructor() {
    this.$input = $('#car-names-input');
    this.$submit = $('#car-names-submit');
  }

  validateCarNames(names) {
    if (!CarNameValidator.checkAtLeastOneCar(names))
      return alert('자동차를 최소한 하나 이상 입력해주세요');
    if (!CarNameValidator.checkCarNameDuplicated(names)) return alert('자동차 이름이 겹쳤습니다.');
    if (!CarNameValidator.checkCarNameUnderFiveLetter(names))
      return alert('자동차 이름은 5자 이하만 가능합니다.');
    return true;
  }

  getSplittedCarNames() {
    return this.$input.value.split(',');
  }
}

export default RacingCountForm;
