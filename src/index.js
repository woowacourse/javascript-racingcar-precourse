import Car from './Car.js';
import { hideElement, showElement } from './utils/dom.js';
import {
  CarNamesInputCheckMethods,
  CountInputCheckMethods,
  isCarNamesInputValid,
  isCountInputValid,
} from './utils/validity.js';

class RacingCarGame {
  count;
  result;
  carNamesArray;

  constructor() {
    this.$racingCountSubmitButton = document.querySelector('#racing-count-submit');
    this.$racingCountInput = document.querySelector('#racing-count-input');
    this.$carNamesInput = document.querySelector('#car-names-input');
    this.$carNamesSubmitButton = document.querySelector('#car-names-submit');
    this.$app = document.querySelector('#app');
    this.$racingCountForm = document.querySelector('#racing-count-form');
    this.$racingResultHeading = document.querySelector('#racing-result-heading');
    this.$racingCountHeading = document.querySelector('#racing-count-heading');

    this.$winnerTextDiv = document.createElement('div');
    this.$winnerTextSpan = document.createElement('span');
    this.$resultTextDiv = document.createElement('div');
    this.init();
  }
  // CountInputContainer
  init() {
    this.triggerCountInputEvent();
    this.triggerCarNamesInputEvent();

    this.makeDOM();
    this.resetDOM();
  }

  makeDOM() {
    this.$app.appendChild(this.$resultTextDiv);
    this.$winnerTextSpan.setAttribute('id', 'racing-winners');
    this.$app.appendChild(this.$winnerTextDiv);
    this.$winnerTextDiv.innerText = '최종 우승자: ';
    this.$winnerTextDiv.appendChild(this.$winnerTextSpan);
  }

  resetDOM() {
    hideElement(this.$racingCountHeading);
    hideElement(this.$racingCountForm);
    hideElement(this.$racingResultHeading);
    hideElement(this.$winnerTextDiv);
  }

  triggerCountInputEvent() {
    this.$racingCountSubmitButton.addEventListener('click', (e) => this.onCountSubmit(e));
  }

  onCountSubmit(e) {
    e.preventDefault();
    const count = this.$racingCountInput.value;
    if (!isCountInputValid(count)) {
      return;
    }
    this.count = count;
    this.makeCars();
    this.moveCars();
    this.showRoundResult();
    this.showWinner();
    this.showResultDOM();
  }

  showResultDOM() {
    showElement(this.$racingResultHeading);
    showElement(this.$winnerTextDiv);
  }

  showWinner() {
    const winner = this.makeWinners();
    console.log(`winner`, winner);

    this.$winnerTextSpan.innerHTML = winner;
  }

  makeWinner() {
    const maxStep = this.getMaxStep();
    let winner = '';
    for (let key in this.result) {
      if (this.result[key].step === maxStep) {
        winner += `, ${this.result[key].name}`;
      }
    }
    return winner.slice(2);
  }

  getMaxStep() {
    const stepArray = this.getStepArray();
    return Math.max(...stepArray);
  }

  getStepArray() {
    const stepArray = [];
    for (let key in this.result) {
      stepArray.push(this.result[key].step);
    }
    return stepArray;
  }

  makeCars() {
    this.result = {};
    for (let car of this.carNamesArray) {
      this.result[car] = new Car(car);
    }
  }

  moveCars() {
    for (let key in this.result) {
      for (let i = 0; i < this.count; i++) {
        this.result[key].move();
      }
    }
  }

  showRoundResult() {
    this.$resultTextDiv.innerHTML = this.makeRoundResult();
  }

  makeRoundResult() {
    let resultText = '';
    for (let i = 0; i < this.count; i++) {
      for (let key in this.result) {
        resultText += `<div>${key}: ${'-'.repeat(this.result[key].stepByRound[i])}</div>\n`;
      }
      resultText += '<br>';
    }
    return resultText;
  }

  // CarNamesInputContainer
  triggerCarNamesInputEvent() {
    this.$carNamesSubmitButton.addEventListener('click', (e) => this.onCarNamesSubmit(e));
  }

  onCarNamesSubmit(e) {
    e.preventDefault();
    const carNames = this.$carNamesInput.value;
    this.carNamesArray = this.strToArr(carNames);
    if (!isCarNamesInputValid(this.carNamesArray)) {
      return;
    }
    this.showCountDOM();
  }

  showCountDOM() {
    showElement(this.$racingCountHeading);
    showElement(this.$racingCountForm);
  }

  strToArr(str) {
    const arr = str.split(',');
    return this.filterBlankInArr(arr);
  }

  filterBlankInArr(arr) {
    return arr.filter((el) => el !== '');
  }
}

new RacingCarGame();
