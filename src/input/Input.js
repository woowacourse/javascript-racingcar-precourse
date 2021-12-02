export default class Input {
  constructor(carNames, repeatCount) {
    this.carNames = carNames;
    this.repeatCount = repeatCount;
  }

  setCarNames(carNames) {
    this.carNames = carNames.split(',');
  }

  setRepeatCount(repeatCount) {
    this.repeatCount = repeatCount;
  }
}
