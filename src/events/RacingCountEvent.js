import { DOM } from '../constant/constant.js';

export default class RacingCountEvent {
  constructor() {
    this.$racingCountInput = DOM.racingCountInput;
    this.$racingCountSubmit = DOM.racingCountSubmit;
    this.stringRacingCount = '';
    this.numberRacingCount = 0;
  }

  isInteger = () => {
    this.numberRacingCount = Number(this.stringRacingCount);
    if (Number.isInteger(this.numberRacingCount)) {
      return true;
    }

    console.log('정수가 아니야!');
    return false;
  };

  isEmpty = () => {
    if (this.stringRacingCount.length === 0) {
      console.log('공백이야!!');
      return true;
    }

    return false;
  };

  validateCount = () => {
    !this.isEmpty() && this.isInteger();
  };

  onClickSubmit = () => {
    this.$racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.stringRacingCount = this.$racingCountInput.value;
      this.validateCount();
    });
  };
}
