import { $ } from './utils/dom.js';

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
  }

  initScreen() {
    $('#racing-count-heading').style.visibility = 'hidden';
    $('#racing-count-form').style.visibility = 'hidden';
    $('#racing-result-heading').style.visibility = 'hidden';
  }

  preventFormSubmitEvent() {
    $('#car-names-form').addEventListener('submit', (e) => e.preventDefault());
    $('#racing-count-form').addEventListener('submit', (e) => e.preventDefault());
  }
}

const game = new RacingGame();

game.init();
