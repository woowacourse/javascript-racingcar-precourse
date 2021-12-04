import { $ } from './utils/dom.js';
import Car from './Car.js';

class RacingCarGame {
  constructor() {
    this.addEventListeners();
    this.cars = [];
  }

  addEventListeners() {
    $('#car-names-submit').addEventListener('click', this.onClickCarNameSubmitButton.bind(this));
  }

  onClickCarNameSubmitButton(event) {
    event.preventDefault();
    this.cars = [];
    const carNames = $('#car-names-input').value;
    if (!carNames) {
      alert('자동차를 입력해주세요');
      return;
    }
    const splittedCarNames = carNames.split(',');
    if (this.checkCarNameDuplicated(splittedCarNames)) {
      alert('자동차 이름이 겹쳤습니다.');
      return;
    }

    if (!this.checkCarNameUnderFiveLetter(splittedCarNames)) {
      alert('자동차 5자가 넘습니다.');
      return;
    }

    splittedCarNames.forEach(carName => {
      this.cars.push(new Car(carName));
    });
    console.log(this.cars);
  }

  checkCarNameDuplicated(splittedCarNames) {
    const set = new Set();
    splittedCarNames.forEach(carName => set.add(carName));
    return set.size !== splittedCarNames.length;
  }

  checkCarNameUnderFiveLetter(splittedCarNames) {
    for (let i = 0; i < splittedCarNames.length; i += 1) {
      if (splittedCarNames[i].length > 5) return false;
    }
    return true;
  }
}

new RacingCarGame();
