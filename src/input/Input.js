export default class Input {
  constructor() {
    this.carNames = null;
    this.repeatCount = 0;
  }

  static isLongerThanFive(names) {
    return names.find((name) => name.length > 5);
  }

  static isEmptyName(names) {
    return names.find((name) => name === '');
  }

  static isIncludeSpaceInName(names) {
    return names.find((name) => name.split('').includes(' '));
  }

  static isValidCarNames(carNames) {
    if (Input.isEmptyName(carNames) === '') {
      return false;
    }
    if (Input.isLongerThanFive(carNames)) {
      return false;
    }
    if (Input.isIncludeSpaceInName(carNames)) {
      return false;
    }
    return true;
  }

  static isAboveZero(repeatCount) {
    return Number(repeatCount) > 0;
  }

  setCarNames(carNames) {
    if (Input.isValidCarNames(carNames)) {
      this.carNames = carNames;
      return;
    }
    this.carNames = null;
  }

  setRepeatCount(repeatCount) {
    if (Input.isAboveZero(repeatCount)) {
      this.repeatCount = repeatCount;
      return;
    }
    this.repeatCount = 0;
  }

  getCarNames() {
    return this.carNames;
  }

  getRepeatCount() {
    return this.repeatCount;
  }
}
