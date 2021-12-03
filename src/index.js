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
    const carNames = $('#car-names-input').value;
    const splittedCarNames = carNames.split(',');
    if (this.checkCarNameDuplicated(splittedCarNames)) {
      alert('자동차 이름이 겹쳤습니다.');
      return;
    }
    splittedCarNames.forEach(carName => {
      this.cars.push(new Car(carName));
    });
    console.log(this.cars);
  }

  checkCarNameDuplicated(carNames) {
    const set = new Set();
    carNames.forEach(carName => {
      set.add(carName);
    });
    return set.size !== carNames.length;
  }
}

new RacingCarGame();
