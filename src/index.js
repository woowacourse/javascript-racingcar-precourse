import stringToArrayConverter from './stringToArrayConverter.js';
import isValidCarNames from './isValidCarNames.js';
import isValidRacingCount from './isValidRacingCount.js';
import Car from './Car.js';

export default class CarRacingGame {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;
    this.cars = [];
    this.addCarNamesSubmitEvent();
    this.addRacingCountSubmitEvent();
  }

  addCarNamesSubmitEvent() {
    const $carNamesInput = document.getElementById('car-names-input');
    const $carNamesSubmit = document.getElementById('car-names-submit');
    $carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();

      const carNamesString = $carNamesInput.value;
      if (!isValidCarNames(carNamesString)) {
        return;
      }
      this.carNames = stringToArrayConverter(carNamesString);
    });
  }

  addRacingCountSubmitEvent() {
    const $racingCountInput = document.getElementById('racing-count-input');
    const $racingCountSubmit = document.getElementById('racing-count-submit');
    $racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();

      if (!isValidRacingCount($racingCountInput.value) || !this.isValidCarNames()) {
        return;
      }

      this.racingCount = Number($racingCountInput.value);
      this.generateCar();
    });
  }

  isValidCarNames() {
    if (this.carNames.length === 0) {
      alert('자동차 이름을 입력해주세요.');
      return false;
    }
    return true;
  }

  generateCar() {
    this.carNames.forEach((name) => this.cars.push(new Car(name)));
  }
}

const car = new CarRacingGame();
