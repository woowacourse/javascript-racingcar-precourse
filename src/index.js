import stringToArrayConverter from './stringToArrayConverter.js';
import isValidCarNames from './isValidCarNames.js';
import isValidRacingCount from './isValidRacingCount.js';
import Car from './Car.js';

export default class CarRacingGame {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;
    this.cars = [];
    this.hideRacingCountForm();
    this.hideHeaders();
    this.addCarNamesSubmitEvent();
    this.addRacingCountSubmitEvent();
  }

  hideRacingCountForm() {
    const $racingCountInput = document.getElementById('racing-count-input');
    const $racingCountForm = $racingCountInput.parentElement;
    $racingCountForm.style.display = 'none';
  }

  hideHeaders() {
    const $titles = document.getElementsByTagName('h4');
    for (let i = 0; i < $titles.length; i++) {
      $titles[i].style.display = 'none';
    }
  }

  showRacingCount() {
    const $racingCountInput = document.getElementById('racing-count-input');
    const $racingCountForm = $racingCountInput.parentElement;
    $racingCountForm.style.display = 'block';

    const $racingCountHeader = document.getElementsByTagName('h4')[0];
    $racingCountHeader.style.display = 'block';
  }

  showResultHeader() {
    const $resultHeader = document.getElementsByTagName('h4')[1];
    $resultHeader.style.display = 'block';
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
      this.showRacingCount();
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
}

const car = new CarRacingGame();
