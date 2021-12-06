import Car from './car.js';
import { checkNameValidation, checkCountValidation } from './validation.js';
import { NAME_INPUT_ERROR, COUNT_INPUT_ERROR } from './constants.js';

class RacingGame {
  constructor() {
    this.countForm = document.getElementById('count-form');
    this.countH4 = document.getElementById('count-h4');
    this.resultH4 = document.getElementById('result-h4');
    this.app = document.getElementById('app');
    this.cars = [];
    this.count = 0;
    this.hideForms();
    this.init();
  }

  init() {
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
        this.cars.push(new Car(element, 0));
      });
      this.checkName(names);
    });
  }

  checkName(names) {
    if (checkNameValidation(names)) {
      this.showCountForm();
    } else {
      this.cars = [];
      alert(NAME_INPUT_ERROR);
    }
  }

  hideForms() {
    this.countForm.style.visibility = 'hidden';
    this.countH4.style.visibility = 'hidden';
    this.resultH4.style.visibility = 'hidden';
  }

  showCountForm() {
    this.countForm.style.visibility = 'visible';
    this.countH4.style.visibility = 'visible';
  }

  countButtonHandler() {
    const countSubmitButton = document.getElementById('racing-count-button');
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
      this.doCount();
    }
  }

  doCount() {
    this.resultH4.style.visibility = 'visible';
    for (let i = 0; i < this.count; i++) {
      this.getScores();
    }
    this.printResult();
  }

  getScores() {
    let currentScore = '';
    this.cars.forEach((e) => {
      if (MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
        e.score += '-';
      }
      currentScore += `${e.name}: ${e.score} <br/>`;
    });
    this.printScores(`${currentScore}<br/>`);
  }

  printScores(currentScore) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = currentScore;
    this.app.appendChild(newDiv);
  }

  printResult() {
    let winners = '';
    let maxScore = 0;
    this.cars.forEach((e) => {
      if (maxScore === e.score.length) {
        winners += `, ${e.name}`;
      } else if (maxScore <= e.score.length) {
        maxScore = e.score.length;
        winners = e.name;
      }
    });
    const winnerText = document.createElement('span');
    winnerText.setAttribute('id', 'racing-winners');
    winnerText.innerHTML = `최종 우숭자: ${winners}`;
    this.app.appendChild(winnerText);
  }
}

new RacingGame();
