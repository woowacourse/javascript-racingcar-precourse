import Car from './car.js';
import { checkNameValidation, checkCountValidation } from './validation.js';
import { NAME_INPUT_ERROR, COUNT_INPUT_ERROR } from './constants.js';

class RacingGame {
  constructor() {
    this.countForm = document.getElementById('count-form');
    this.countH4 = document.getElementById('count-h4');
    this.resultH4 = document.getElementById('result-h4');
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
    const nameSubmitButton = document.getElementById('name-form-button');
    const userInput = document.getElementById('name-form-input');
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
    const countSubmitButton = document.getElementById('count-form-button');
    const userInput = document.getElementById('count-form-input');
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
      console.log(this.cars);
      this.doCount();
    }
  }

  getScores() {
    this.cars.forEach((e) => {
      if (MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
        e.score += 1;
      }
    });
  }

  doCount() {
    for (let i = 0; i < this.count; i++) {
      console.log(`${i}번째 게임`);
      this.getScores();
    }
  }
}
new RacingGame();
