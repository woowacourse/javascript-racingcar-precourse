import { DISPLAY, SEPARATOR } from './constants.js';
import stringToArrayConverter from './stringToArrayConverter.js';
import isValidCarNames from './isValidCarNames.js';
import isValidRacingCount from './isValidRacingCount.js';
import hideRacingCountAndResult from './hideRacingCountAndResult.js';
import showRacingCount from './showRacingCountForm.js';
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

  showResultHeader() {
    const $resultHeader = document.getElementsByTagName('h4')[1];
    $resultHeader.style.display = DISPLAY.block;
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

      this.showResultHeader();
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
      this.printRace();
    }

    this.findWinner();
    this.printResult();
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  makeRaceElement() {
    const $raceElement = document.createElement('div');
    this.cars.forEach((car) => {
      const div = document.createElement('div');
      div.appendChild(document.createTextNode(car.raceString()));
      $raceElement.appendChild(div);
    });
    $raceElement.appendChild(document.createElement('br'));

    return $raceElement;
  }

  printRace() {
    const $app = document.getElementById('app');
    $app.appendChild(this.makeRaceElement());
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

  makeResultElement() {
    const $racingWinners = document.createElement('span');
    $racingWinners.setAttribute('id', 'racing-winners');
    const winners = this.winner.join(SEPARATOR);
    $racingWinners.appendChild(document.createTextNode(`${winners}`));

    return $racingWinners;
  }

  printResult() {
    const $app = document.getElementById('app');
    $app.appendChild(this.makeResultElement());
  }
}

new CarRacingGame();
