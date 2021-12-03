export default class Input {
  constructor(carNames, repeatCount) {
    this.carNames = carNames;
    this.repeatCount = repeatCount;
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

  setCarNames(carNames) {
    if (Input.isValidCarNames(carNames)) {
      this.carNames = carNames;
      return;
    }
    this.carNames = null;
  }

  setRepeatCount(repeatCount) {
    this.repeatCount = repeatCount;
  }

  getCarNames() {
    return this.carNames;
  }

  getRepeatCount() {
    return this.repeatCount;
  }
}
