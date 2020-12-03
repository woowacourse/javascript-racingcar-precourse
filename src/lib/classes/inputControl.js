import { MAX_CAR_NAME_LENGTH } from '/src/lib/variables/constantNumbers.js';

export default class Inputs {
  constructor(inputs) {
    this.inputs = inputs;
  }

  checkSpace() {
    return /\s+/g.test(this.inputs);
  }

  checkCharsWithoutNumber() {
    return /[^1-9]+/g.test(this.inputs);
  }

  checkIsValudNumber() {
    return Number(this.inputs) > 0;
  }
  
  checkMoreThanFiveChars() {
    const carNames = this.inputs.split(',');
    return carNames.some(carName => carName.length > MAX_CAR_NAME_LENGTH);
  }

  checkSameNames() {
    const carNames = this.inputs.split(',');
    const carsWithoutSameName = new Set([...carNames]);
    console.log(carsWithoutSameName);
    return carsWithoutSameName.size !== carNames.length;
  }

  getCarNames() {
    return this.inputs.split(',');
  }

  getRacingCountNumber() {
    return Number(this.inputs);
  }
}