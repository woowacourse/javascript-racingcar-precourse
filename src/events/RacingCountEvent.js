import { DOM, ERROR_MESSAGE } from '../constant/constant.js';

export default class RacingCountEvent {
  constructor() {
    this.$racingCountInput = DOM.racingCountInput;
    this.$racingCountSubmit = DOM.racingCountSubmit;
    this.stringRacingCount = '';
    this.numberRacingCount = 0;
    this.errorMessage = '';
  }

  initializeRacingCount = () => {
    this.stringRacingCount = '';
    this.numberRacingCount = 0;
    this.errorMessage = '';
  };

  alertMessage = () => {
    alert(this.errorMessage);
  };

  isPositiveInteger = () => {
    if (this.numberRacingCount > 0) {
      return true;
    }

    return false;
  };

  isInteger = () => {
    this.numberRacingCount = Number(this.stringRacingCount);
    if (Number.isInteger(this.numberRacingCount)) {
      return true;
    }

    return false;
  };

  isEmpty = () => {
    if (this.stringRacingCount.length === 0) {
      return true;
    }

    return false;
  };

  validateCount = () => {
    const isValidate =
      !this.isEmpty() && //
      this.isInteger() &&
      this.isPositiveInteger();

    return isValidate;
  };

  onClickSubmit = () => {
    this.$racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.stringRacingCount = this.$racingCountInput.value;
      if (!this.validateCount()) {
        this.errorMessage = ERROR_MESSAGE.NO_POSITIVE_INTEGER;
        this.alertMessage();
      }
    });
  };
}
