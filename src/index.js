import Car from './car.js';
import { checkNameValidation, checkCountValidation } from './validation.js';
import { NAME_INPUT_ERROR, COUNT_INPUT_ERROR } from './constants.js';
import Layout from './layout.js';

class RacingGame {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.winners = '';
    this.layout = new Layout;
    this.init();
  }

  init() {
    this.layout.hideForms();
    this.nameButtonHandler();
    this.countButtonHandler();
  }

  nameButtonHandler() {
    const nameSubmitButton = document.getElementById('car-names-submit');
    const userInput = document.getElementById('car-names-input');
    let names;
    nameSubmitButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.cars = [];
      names = userInput.value.split(',');
      names.forEach((element) => {
        this.cars.push(new Car(element));
      });
      this.checkName(names);
    });
  }

  checkName(names) {
    if (checkNameValidation(names)) {
      this.layout.showCountForm();
    } else {
      this.cars = [];
      alert(NAME_INPUT_ERROR);
    }
  }

  countButtonHandler() {
    const countSubmitButton = document.getElementById('racing-count-submit');
    const userInput = document.getElementById('racing-count-input');
    countSubmitButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.count = userInput.value;
      this.checkCount();
    });
  }

  checkCount() {
    if (!checkCountValidation(this.count)) {
      alert(COUNT_INPUT_ERROR);
    } else {
      this.playGame();
    }
  }

  playGame() {
    this.layout.showResultH4();
    for (let i = 0; i < this.count; i++) {
      this.getScores();
    }
    this.getWinners();
    this.layout.printWinners(this.winners);
  }

  getScores() {
    let currentScore = '';
    this.cars.forEach((e) => {
      if (MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
        e.score += '-';
      }
      currentScore += `${e.name}: ${e.score} <br/>`;
    });
    this.layout.printScores(`${currentScore}<br/>`);
  }

  getWinners() {
    let maxScore = 0;
    this.cars.forEach((e) => {
      if (maxScore === e.score.length) {
        this.winners += `, ${e.name}`;
      } else if (maxScore <= e.score.length) {
        maxScore = e.score.length;
        this.winners = e.name;
      }
    });
  }
}

new RacingGame();