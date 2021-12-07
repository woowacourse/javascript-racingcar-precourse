import { checkNameValidation, checkCountValidation } from '../utils/validation.js';
import { NAME_INPUT_ERROR, COUNT_INPUT_ERROR } from '../utils/constants.js';
import Car from '../model/car.js';
import View from '../view/view.js';

export default class Controller {
  constructor(){
    this.cars = [];
    this.winners = '';
    this.view = new View(this);
  }

  init() {
    this.view.hideForms();
    this.view.nameButtonHandler();
    this.view.countButtonHandler();
  }
  
  getCarNames(userInput) {
    this.cars = [];
    let names = userInput.split(',');
    names.forEach((element) => {
      this.cars.push(new Car(element));
    });
    this.checkName(names);
  }

  checkName(names) {
    if (checkNameValidation(names)) {
      this.view.showCountForm();
    } else {
      this.cars = [];
      alert(NAME_INPUT_ERROR);
    }
  }

  checkCount(count) {
    if (!checkCountValidation(count)) {
      alert(COUNT_INPUT_ERROR);
    } else {
      this.playGame(count);
    }
  }

  playGame(count) {
    this.view.showResultH4();
    for (let i = 0; i < count; i++) {
      this.getScores();
    }
    this.getWinners();
    this.view.printWinners(this.winners);
  }

  getScores() {
    let currentScore = '';
    this.cars.forEach((e) => {
      if (MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
        e.score += '-';
      }
      currentScore += `${e.name}: ${e.score} <br/>`;
    });
    this.view.printScores(`${currentScore}<br/>`);
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