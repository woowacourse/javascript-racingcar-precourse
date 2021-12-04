import Car from '../index.js';
import { CountInputCheckMethods } from '../utils/validity.js';
import CarNamesInputContainer from './CarNamesInputContainer.js';

class CountInputContainer {
  count;
  result;
  constructor() {
    this.$racingCountSubmitButton = document.querySelector('#racing-count-submit');
    this.$racingCountInput = document.querySelector('#racing-count-input');
    this.carNamesInputContainer = new CarNamesInputContainer();
    this.$app = document.querySelector('#app');
    this.init();
  }
  init() {
    this.triggerCountInputEvent();
  }
  triggerCountInputEvent() {
    this.$racingCountSubmitButton.addEventListener('click', (e) => this.onCountSubmit(e));
  }
  onCountSubmit(e) {
    e.preventDefault();
    const count = this.$racingCountInput.value;
    if (!this.isInputValid(count)) {
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
    console.log(`carNamesInputContainer.carNamesArray`, this.carNamesInputContainer.carNamesArray);
    for (let car of this.carNamesInputContainer.carNamesArray) {
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

  isInputValid(value) {
    return CountInputCheckMethods.every((CountInputCheckMethod) => InputCheckMethod(value));
  }
}

export default CountInputContainer;
