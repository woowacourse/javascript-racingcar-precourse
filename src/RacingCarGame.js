import Car from './index.js';
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
    this.init();
  }
  // CountInputContainer
  init() {
    this.triggerCountInputEvent();
    this.triggerCarNamesInputEvent();
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
  }
  showWinner() {
    const maxStep = this.getMaxStep();
    let winner = '';
    for (let key in this.result) {
      if (this.result[key].step === maxStep) {
        winner += `, ${this.result[key].name}`;
      }
    }
    winner = `최종 우승자: ${winner.slice(2)}`;
    console.log(`winner`, winner);
    const winnerTextDiv = document.createElement('span');
    winnerTextDiv.setAttribute('id', 'racing-winners');
    winnerTextDiv.innerHTML = winner;
    this.$app.appendChild(winnerTextDiv);
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
    const resultTextDiv = document.createElement('div');
    resultTextDiv.innerHTML = resultText;
    this.$app.appendChild(resultTextDiv);
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
