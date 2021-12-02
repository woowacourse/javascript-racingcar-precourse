export default class Input {
  constructor(carNames, repeatCount) {
    this.carNames = carNames;
    this.repeatCount = repeatCount;
  }

  isLongerThanFive(names) {
    return names.find((name) => name.length > 5);
  }

  isEmptyName(names) {
    return names.find((name) => name === '');
  }

  isIncludeSpaceInName(names) {
    return names.find((name) => name.split('').includes(' '));
  }

  isValidCarNames(carNames) {
    if (this.isEmptyName(carNames) === '') {
      return false;
    }
    if (this.isLongerThanFive(carNames)) {
      return false;
    }
    if (this.isIncludeSpaceInName(carNames)) {
      return false;
    }
    return true;
  }

  setCarNames(carNames) {
    if (this.isValidCarNames(carNames)) {
      this.carNames = carNames;
      return ;
    }
    this.carNames = null;
  }

  setRepeatCount(repeatCount) {
    this.repeatCount = repeatCount;
  }

  getCarNames() {
    return this.carNames;
  }
}
