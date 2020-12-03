import { MAX_CAR_NAME_LENGTH } from '/src/lib/variables/constantNumbers.js';

class InputResult {
  constructor() {
    this.goToNextStep = true;
    this.message = '';
    this.inputData = [];
  }

  getAlertMessage(message) {
    this.goToNextStep = false;
    this.message = message;
  }

  insertData(inputData) {
    this.goToNextStep = true;
    this.inputData = inputData;
  }
}

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
    return carsWithoutSameName.size !== carNames.length;
  }

  getCarNames() {
    return this.inputs.split(',');
  }

  getRacingCountNumber() {
    return Number(this.inputs);
  }

  getResultOfCarNamesInput($carNamesInput) {
    let inputResult = new InputResult();
    $carNamesInput.focus();
    if(this.checkSpace()) inputResult.getAlertMessage('공백은 입력받을 수 없습니다.');
    if(this.checkMoreThanFiveChars()) inputResult.getAlertMessage('자동차 이름은 5글자를 넘으면 안됩니다.');
    if(this.checkSameNames()) inputResult.getAlertMessage('같은 이름의 자동차를 입력할 수 없습니다.');

    if(inputResult.goToNextStep) inputResult.insertData(this.getCarNames());
    return inputResult;
  }

  getResultOfRacingCountNumber($racingCountInput) {

    return new InputResult(true, '', this.getRacingCountNumber());
  }


}