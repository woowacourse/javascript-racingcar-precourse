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
    splittedCarNames.forEach(carName => {
      this.cars.push(new Car(carName));
    });
    console.log(this.cars);
  }
}

new RacingCarGame();
