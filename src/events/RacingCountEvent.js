import { DOM, ERROR_MESSAGE, CAUTION_MESSAGE } from '../constant/constant.js';

export default class RacingCountEvent {
  constructor() {
    this.$racingCountInput = DOM.racingCountInput;
    this.$racingCountSubmit = DOM.racingCountSubmit;
    this.$carNamesInput = DOM.carNamesInput;
    this.errorMessage = '';
    this.stringRacingCount = '';
    this.numberRacingCount = 0;
  }

  initializeRacingCount = () => {
    this.stringRacingCount = '';
    this.numberRacingCount = 0;
    this.errorMessage = '';
  };

  alertErrorMessage = () => {
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
        this.alertErrorMessage();
      }
    });
  };

  alertCautionMessage = () => {
    alert(CAUTION_MESSAGE.FIRST_CAR_NAMES);
  };

  isCarNamesBlank = () => {
    if (this.$carNamesInput.value.length === 0) {
      return true;
    }

    return false;
  };

  onFocusInput = () => {
    this.$racingCountInput.addEventListener('focus', () => {
      if (this.isCarNamesBlank()) {
        this.alertCautionMessage();
        this.$carNamesInput.focus();
      }
    });
  };
}
