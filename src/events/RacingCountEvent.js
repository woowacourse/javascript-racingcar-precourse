import { DOM } from '../constant/constant.js';

export default class RacingCountEvent {
  constructor() {
    this.$racingCountInput = DOM.racingCountInput;
    this.$racingCountSubmit = DOM.racingCountSubmit;
    this.racingCount = '';
  }

  isNegativeNumber = () => {
    if (this.racingCount[0] === '-') {
      console.log('음수야!!');
      return true;
    }

    return false;
  };

  isEmpty = () => {
    if (this.racingCount.length === 0) {
      console.log('공백이야!!');
      return true;
    }

    return false;
  };

  validateCount = () => {
    this.isEmpty();
    this.isNegativeNumber();
  };

  onClickSubmit = () => {
    this.$racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.racingCount = this.$racingCountInput.value;
      this.validateCount();
    });
  };
}
