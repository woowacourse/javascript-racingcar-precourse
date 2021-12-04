import Car from './car.js';
import { checkNameValidation } from './validation.js';
import { NAME_INPUT_ERROR } from './constants.js';

class RacingGame {
  constructor() {
    this.countForm = document.getElementById('count-form');
    this.countH4 = document.getElementById('count-h4');
    this.resultH4 = document.getElementById('result-h4');
    this.cars = [];
    this.hideForms();
    this.init();
  }

  init() {
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
      console.log(this.cars);
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
