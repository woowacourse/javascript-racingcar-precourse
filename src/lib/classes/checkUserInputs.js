import { MAX_CAR_NAME_LENGTH } from '../variables/constantNumbers.js';
import Car from './car.js';

const InputResult = (goToNextStep, inputData) => ({
  goToNextStep,
  inputData
});

export default class InputsControl {
  constructor(inputs) {
    this.inputs = inputs;
    this._carNames = inputs.split(',');
    this._racingCount = Number(inputs);
  }

  _checkIsEmpty() {
    if(this.inputs.length === 0) {
      alert('값을 입력해주세요.');
      return true;
    }
    return false;
  }

  _checkSpace() {
    if(/\s+/g.test(this.inputs)) {
      alert('공백은 입력받을 수 없습니다.');
      return true;
    }
    return false;
  }
  
  _checkMoreThanFiveChars() {
    if(this._carNames.some(carName => carName.length > MAX_CAR_NAME_LENGTH)) {
      alert(`자동차 이름은 ${MAX_CAR_NAME_LENGTH}글자를 넘을 수 없습니다.`);
      return true;
    }
    return false;
  }

  _checkLessThanOneChar() {
    if(this._carNames.some(carName => carName.length === 0)) {
      alert(`자동차 이름은 한 글자 이상이어야 합니다.`);
      return true;
    }
    return false;
  }

  _checkLessThanOneCars() {
    if(this._carNames.length < 2) {
      alert('자동차는 반드시 2대 이상이어야 합니다.');
      return true;
    }
    return false;
  }

  _checkSameNames() {
    const carsWithoutSameName = new Set([...this._carNames]);
    if(carsWithoutSameName.size !== this._carNames.length) {
      alert('자동차 이름은 중복될 수 없습니다.');
      return true;
    }
    return false;
  }

  _checkInvalidNumber() {
    if(this._racingCount <= 0) {
      alert('0이하의 값은 입력받을 수 없습니다.');
      return true;
    }
    return false;
  }

  _checkChars() {
    if(/[^1-9]+/g.test(this.inputs)) {
      alert('숫자 외에는 입력받을 수 없습니다.');
      return true;
    }
    return false;
  }

  _getCarNames() {
    return this._carNames.reduce((acc, carName) => {
      acc.push(new Car(carName));
      return acc;
    }, []);
  }

  _getRacingCountNumber() {
    return this._racingCount;
  }

  getResultOfCarNamesInput($carNamesInput) {
    $carNamesInput.focus();
    if(!this._checkIsEmpty() && !this._checkSpace() && !this._checkSameNames()
      && !this._checkLessThanOneCars()
      && !this._checkMoreThanFiveChars() && !this._checkLessThanOneChar()
    ) {
      return InputResult(true, this._getCarNames());
    }
    return InputResult(false, null);
  }

  getResultOfRacingCountNumber($racingCountInput) {
    $racingCountInput.focus();
    if(!this._checkIsEmpty() && !this._checkSpace() && !this._checkInvalidNumber() && !this._checkChars()) {
      return InputResult(true, this._getRacingCountNumber());
    }
    return InputResult(false, null);
  }
}