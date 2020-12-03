import { MAX_CAR_NAME_LENGTH } from '/src/lib/variables/constantNumbers.js';
import Car from '/src/lib/classes/car.js';

class InputResult {
  constructor(goToNextStep, inputData) {
    this.goToNextStep = goToNextStep;
    this.inputData = inputData;
  }
}

export default class InputsControl {
  constructor(inputs) {
    this.inputs = inputs;
    this._carNames = inputs.split(',').filter(carName => carName.length > 0);
    this._racingCount = Number(inputs);
  }

  checkIsEmpty() {
    if(this.inputs.length === 0) {
      alert('값을 입력해주세요.');
      return true;
    }
    return false;
  }

  checkSpace() {
    if(/\s+/g.test(this.inputs)) {
      alert('공백은 입력받을 수 없습니다.');
      return true;
    }
    return false;
  }
  
  checkMoreThanFiveChars() {
    if(this._carNames.some(carName => carName.length > MAX_CAR_NAME_LENGTH)) {
      alert(`자동차 이름은 ${MAX_CAR_NAME_LENGTH}글자를 넘을 수 없습니다.`);
      return true;
    }
    return false;
  }

  checkLessThanOneCars() {
    if(this._carNames.length < 2) {
      alert('자동차는 반드시 2대 이상이어야 합니다.');
      return true;
    }
    return false;
  }

  checkSameNames() {
    const carsWithoutSameName = new Set([...this._carNames]);
    if(carsWithoutSameName.size !== this._carNames.length) {
      alert('자동차 이름은 중복될 수 없습니다.');
      return true;
    }
    return false;
  }

  checkInvalidNumber() {
    if(this._racingCount <= 0) {
      alert('0이하의 값은 입력받을 수 없습니다.');
      return true;
    }
    return false;
  }

  checkChars() {
    if(/[^1-9]+/g.test(this.inputs)) {
      alert('숫자 외에는 입력받을 수 없습니다.');
      return true;
    }
    return false;
  }

  getCarNames() {
    return this._carNames.reduce((acc, carName) => {
      acc.push(new Car(carName));
      return acc;
    }, []);
  }

  getRacingCountNumber() {
    return this._racingCount;
  }

  getResultOfCarNamesInput($carNamesInput) {
    $carNamesInput.focus();
    if(!this.checkIsEmpty() && !this.checkSpace() && !this.checkSameNames()
      && !this.checkLessThanOneCars() 
      && !this.checkMoreThanFiveChars()
    ) {
      return new InputResult(true, this.getCarNames(), '');
    }
    return new InputResult(false, null);
  }

  getResultOfRacingCountNumber($racingCountInput) {
    $racingCountInput.focus();
    if(!this.checkIsEmpty() && !this.checkSpace() && !this.checkInvalidNumber() && !this.checkChars()) {
      return new InputResult(true, this.getRacingCountNumber(), '');
    }
    return new InputResult(false, null);
  }
}