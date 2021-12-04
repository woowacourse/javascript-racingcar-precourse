import Car from './car.js';
import { checkNameValidation } from './validation.js';
import { NAME_INPUT_ERROR } from './constants.js';

class RacingGame {
  constructor() {
    this.countForm = document.getElementById('count-form');
    this.countH4 = document.getElementById('count-h4');
    this.resultH4 = document.getElementById('result-h4');
    this.cars = [];
    this.init();
  }

  init() {
    this.hideForms();
    let names;
    const nameSubmitButton = document.getElementById('name-form-button');
    const userInput = document.getElementById('name-form-input');
    nameSubmitButton.addEventListener('click', (e) => {
      e.preventDefault();
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
}

new RacingGame();
