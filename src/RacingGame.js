import { isValidCarNames, isValidRacingCount } from './utils/validations.js';

export default class RacingGame {
  constructor() {
    this.setInputElements();
    this.setSubmitButton();
    this.setResultElements();
  }

  setInputElements() {
    this.carNamesInput = document.querySelector('#car-names-input');
    this.racingCountInput = document.querySelector('#racing-count-input');
  }

  setSubmitButton() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');
    const racingCountSubmitButton = document.querySelector('#racing-count-submit');
    carNamesSubmitButton.addEventListener('click', this.onSubmitCarNames.bind(this));
    racingCountSubmitButton.addEventListener('click', this.onSubmitRacingCount.bind(this));
  }

  setResultElements() {
    const resultDiv = document.createElement('div');
    resultDiv.setAttribute('id', 'racing-result');
    document.querySelector('#app').appendChild(resultDiv);
    this.resultDiv = resultDiv;
  }

  onSubmitCarNames(event) {
    event.preventDefault();
    const carNames = this.carNamesInput.value.split(',');
    if (!isValidCarNames(carNames)) {
      console.log('In');
      return;
    }
    console.log('Out');
  }

  onSubmitRacingCount(event) {
    event.preventDefault();
    const racingCount = Number(this.racingCountInput.value);
    if (!isValidRacingCount(racingCount)) {
      console.log('In');
      return;
    }
    console.log('Out');
  }
}
