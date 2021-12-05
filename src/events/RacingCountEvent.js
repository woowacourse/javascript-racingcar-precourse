import { DOM, ERROR_MESSAGE } from '../constant/constant.js';

export default class RacingCountEvent {
  constructor() {
    this.$racingCountInput = DOM.$RACING_COUNT_INPUT;
    this.$carNamesInput = DOM.$CAR_NAMES_INPUT;
    this.stringRacingCount = '';
    this.numberRacingCount = 0;
  }

  initializeRacingCount = () => {
    this.stringRacingCount = '';
    this.numberRacingCount = 0;
  };

  alertErrorMessage = () => {
    alert(ERROR_MESSAGE.NO_POSITIVE_INTEGER);
    this.$racingCountInput.focus();
  };

  alertCautionMessage = (cautionMessage) => {
    alert(cautionMessage);
    this.$carNamesInput.focus();
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

  getInput = () => {
    return this.numberRacingCount;
  };

  isCarNamesBlank = () => {
    if (this.$carNamesInput.value.length === 0) {
      return true;
    }

    return false;
  };

  validateCount = () => {
    this.stringRacingCount = this.$racingCountInput.value;

    const isValidate =
      !this.isEmpty() && //
      this.isInteger() &&
      this.isPositiveInteger();

    return isValidate;
  };
}
