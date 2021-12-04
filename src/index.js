import Car from './Car.js';
import { hideElement, showElement } from './utils/dom.js';
import { CarNamesInputCheckMethods, CountInputCheckMethods } from './utils/validity.js';

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
    if (!this.isCountInputValid(count)) {
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
    const maxStep = this.getMaxStep();
    let winner = '';
    for (let key in this.result) {
      if (this.result[key].step === maxStep) {
        winner += `, ${this.result[key].name}`;
      }
    }
    winner = winner.slice(2);
    console.log(`winner`, winner);

    this.$winnerTextSpan.innerHTML = winner;
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
    console.log(`carNamesInputContainer.carNamesArray`, this.carNamesArray);
    for (let car of this.carNamesArray) {
      this.result[car] = new Car(car);
    }
    console.log(`this.result`, this.result);
  }

  moveCars() {
    for (let key in this.result) {
      for (let i = 0; i < this.count; i++) {
        this.result[key].move();
      }
    }
  }

  showRoundResult() {
    // for 문으로 count만큼 출력
    let resultText = '';
    for (let i = 0; i < this.count; i++) {
      for (let key in this.result) {
        resultText += `<div>${key}: ${'-'.repeat(this.result[key].stepByRound[i])}</div>\n`;
      }
      resultText += '<br>';
    }
    this.$resultTextDiv.innerHTML = resultText;
  }

  isCountInputValid(value) {
    return CountInputCheckMethods.every((CountInputCheckMethod) => CountInputCheckMethod(value));
  }

  // CarNamesInputContainer
  triggerCarNamesInputEvent() {
    this.$carNamesSubmitButton.addEventListener('click', (e) => this.onCarNamesSubmit(e));
  }

  onCarNamesSubmit(e) {
    e.preventDefault();
    const carNames = this.$carNamesInput.value;
    this.carNamesArray = this.strToArr(carNames);
    if (!this.isCarNamesInputValid(this.carNamesArray)) {
      return;
    }
    this.showCountDOM();
  }

  showCountDOM() {
    showElement(this.$racingCountHeading);
    showElement(this.$racingCountForm);
  }

  isCarNamesInputValid(carNamesArray) {
    return carNamesArray.every((carName) =>
      CarNamesInputCheckMethods.every((CarNamesInputCheckMethod) =>
        CarNamesInputCheckMethod(carName),
      ),
    );
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
