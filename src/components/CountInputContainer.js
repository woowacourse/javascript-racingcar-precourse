import Car from '../index.js';
import { USER_INPUT_ALERT } from '../libs/constant.js';
import CarNamesInputContainer from './CarNamesInputContainer.js';

const InputCheckMethods = [
  (value) => {
    if (value === '' || Number(value) < 1 || parseInt(value) !== Number(value)) {
      alert(USER_INPUT_ALERT.notNaturalNumber);
      return false;
    }
    return true;
  },
];

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
    console.log('1');
    if (!this.isInputValid(count)) {
      return;
    }
    this.count = count;
    this.makeCars();
    this.moveCars();
    console.log(`result`, this.result);
    this.showRoundResult();
  }
  makeCars() {
    this.result = {};
    console.log(`carNamesInputContainer.carNamesArray`, this.carNamesInputContainer.carNamesArray);
    for (let car of this.carNamesInputContainer.carNamesArray) {
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
    return InputCheckMethods.every((InputCheckMethod) => InputCheckMethod(value));
  }
}

export default CountInputContainer;
