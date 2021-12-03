import stringToArrayConverter from './utils/stringToArrayConverter.js';
import isValidCarNames from './utils/isValidCarNames.js';
import isValidRacingCount from './utils/isValidRacingCount.js';
import hideRacingCountAndResult from './dom/hideRacingCountAndResult.js';
import showRacingCount from './dom/showRacingCountForm.js';
import printRace from './dom/printRace.js';
import printResult from './dom/printResult.js';
import Car from './Car.js';

export default class CarRacingGame {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;
    this.cars = [];
    this.winner = [];
    hideRacingCountAndResult();
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
      showRacingCount();
    });
  }

  addRacingCountSubmitEvent() {
    const $racingCountInput = document.getElementById('racing-count-input');
    const $racingCountSubmit = document.getElementById('racing-count-submit');
    $racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      if (!isValidRacingCount($racingCountInput.value)) {
        return;
      }

      this.racingCount = Number($racingCountInput.value);
      this.generateCar();
      this.play();
    });
  }

  generateCar() {
    this.carNames.forEach((name) => this.cars.push(new Car(name)));
  }

  play() {
    for (let racing = 0; racing < this.racingCount; racing++) {
      this.moveCars();
      printRace(this.cars);
    }

    this.findWinner();
    printResult(this.winner);
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  findWinner() {
    let maxDistance = 0;
    this.cars.forEach((car) => {
      if (car.distance === maxDistance) {
        this.winner.push(car.name);
      }

      if (car.distance > maxDistance) {
        this.winner = [car.name];
        maxDistance = car.distance;
      }
    });
  }
}

new CarRacingGame();
