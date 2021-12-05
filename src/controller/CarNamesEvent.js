import { DOM, ERROR_MESSAGE } from '../utils/constant.js';

export default class CarNamesEvent {
  constructor() {
    this.$carNamesInput = DOM.$CAR_NAMES_INPUT;
    this.carNames = '';
    this.errorMessage = '';
    this.carNamesArray = [];
  }

  initializeCarNames = () => {
    this.errorMessage = '';
    this.carNames = '';
    this.carNamesArray = [];
  };

  alertMessage = () => {
    alert(this.errorMessage);
    this.initializeCarNames();
  };

  recursiveArray = (text) => {
    for (let i = 0; i < this.carNames.length; i += 1) {
      const carNamesText = this.carNames[i];

      if (carNamesText === text) {
        return true;
      }
    }

    return false;
  };

  isNameEmpty = () => {
    let rightName = true;

    this.carNamesArray.forEach((carName) => {
      if (carName === '') {
        this.errorMessage = ERROR_MESSAGE.NO_EMPTY;
        rightName = false;
      }
    });

    return rightName;
  };

  isRightLength = () => {
    let rightLength = true;

    this.carNamesArray.forEach((carName) => {
      if (carName.length > 5) {
        this.errorMessage = ERROR_MESSAGE.TO_LONG;
        rightLength = false;
      }
    });

    return rightLength;
  };

  isDuplicate = () => {
    this.carNamesArray = this.carNames.split(',');
    let noDuplicate = true;

    this.carNamesArray.reduce((prev, curr) => {
      if (prev === curr) {
        this.errorMessage = ERROR_MESSAGE.NO_DUPLICATE;
        noDuplicate = false;
      }

      return curr;
    }, '');

    return noDuplicate;
  };

  isComma = () => {
    const noComma = this.recursiveArray(',');

    if (!noComma) {
      this.errorMessage = ERROR_MESSAGE.NO_COMMA;
    }

    return noComma;
  };

  isBlank = () => {
    const noBlank = this.recursiveArray(' ');

    if (noBlank) {
      this.errorMessage = ERROR_MESSAGE.NO_BLANK;
    }

    return !noBlank;
  };

  isEmpty = () => {
    if (this.carNames.length === 0) {
      this.errorMessage = ERROR_MESSAGE.NO_EMPTY;

      return false;
    }

    return true;
  };

  getInput = () => {
    return this.carNamesArray;
  };

  validateNames = () => {
    this.carNames = this.$carNamesInput.value;
    const isValidate =
      this.isEmpty() &&
      this.isBlank() &&
      this.isComma() &&
      this.isDuplicate() &&
      this.isRightLength() &&
      this.isNameEmpty();

    return isValidate;
  };
}
