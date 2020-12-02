const MAX_CAR_NAME_LENGTH = 5;

export default class InputStatus {
  constructor(inputs) {
    this.inputs = inputs;
  }

  checkSpace() {
    return /\s+/g.test(this.inputs);
  }

  checkCharsWithoutNumber() {
    return /[^1-9]+/g.test(this.inputs);
  }
  
  checkMoreThanFiveChars() {
    const carNames = this.inputs.split(',');
    return carNames.some(carName => carName.length > MAX_CAR_NAME_LENGTH);
  }

  checkSameNames() {
    const carNames = this.inputs.split(',');
    const carsWithoutSameName = new Set([...carNames]);
    return carsWithoutSameName.size === carNames.length;
  }

  getCarNames() {
    return this.inputs.split(',');
  }

  getTurnNumber() {
    return Number(this.inputs);
  }
}