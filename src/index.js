import { $ } from './utils/dom.js';
import { isValidateCarNames, isValidateRacingCount } from './utils/validation.js';

class Car {
  constructor(name) {
    this.name = name;
  }
}

class RacingGame {
  constructor() {
    this.racingCars = [];
  }

  init() {
    this.initScreen();
    this.preventFormSubmitEvent();
    this.triggerCarNamesSubmitEvent();
    this.triggerRacingCountSubmitEvent();
  }

  initScreen() {
    $('#racing-count-heading').style.visibility = 'hidden';
    $('#racing-count-form').style.visibility = 'hidden';
    $('#racing-result-heading').style.visibility = 'hidden';
  }

  showRacingCountScreen() {
    $('#racing-count-heading').style.visibility = 'visible';
    $('#racing-count-form').style.visibility = 'visible';
  }

  preventFormSubmitEvent() {
    $('#car-names-form').addEventListener('submit', (e) => e.preventDefault());
    $('#racing-count-form').addEventListener('submit', (e) => e.preventDefault());
  }

  triggerCarNamesSubmitEvent() {
    $('#car-names-submit').addEventListener('click', () => {
      const carNamesInput = $('#car-names-input').value;

      if (isValidateCarNames(carNamesInput)) {
        this.racingCars = carNamesInput.split(',').map((carName) => new Car(carName));
        this.showRacingCountScreen();
      }
    });
  }

  triggerRacingCountSubmitEvent() {
    $('#racing-count-submit').addEventListener('click', () => {
      const racingCountInput = $('#racing-count-input').value;

      if (isValidateRacingCount(racingCountInput)) {
        console.log('옳은 값입니다.');
      }
    });
  }
}

const game = new RacingGame();

game.init();
