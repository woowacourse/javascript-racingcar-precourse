function isLongerThanFive(names) {
  return names.find((name) => name.length > 5);
}

function isEmptyName(names) {
  return names.find((name) => name === '');
}

function isIncludeSpaceInName(names) {
  return names.find((name) => name.split('').includes(' '));
}

function isValidCarNames(carNames) {
  if (isEmptyName(carNames) === '') {
    return false;
  }
  if (isLongerThanFive(carNames)) {
    return false;
  }
  if (isIncludeSpaceInName(carNames)) {
    return false;
  }
  return true;
}

function isAboveZero(repeatCount) {
  return Number(repeatCount) > 0;
}

export default class Input {
  constructor() {
    this.carNames = null;
    this.repeatCount = 0;
  }

  setCarNames(carNames) {
    if (isValidCarNames(carNames)) {
      this.carNames = carNames;
      return;
    }
    this.carNames = null;
  }

  setRepeatCount(repeatCount) {
    if (isAboveZero(repeatCount)) {
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
