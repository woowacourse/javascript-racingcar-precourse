import { DOM } from '../constant/constant.js';

export default class RacingCountEvent {
  constructor() {
    this.$racingCountInput = DOM.racingCountInput;
    this.$racingCountSubmit = DOM.racingCountSubmit;
    this.racingCount = '';
  }

  isEmpty = () => {
    if (this.racingCount.length === 0) {
      console.log('양의 정수를 입력해 주세요.');
      return false;
    }

    return true;
  };

  validateCount = () => {
    this.isEmpty();
  };

  onClickSubmit = () => {
    this.$racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.racingCount = this.$racingCountInput.value;
      this.validateCount();
    });
  };
}
