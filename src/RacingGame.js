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
    console.log(carNames);
  }

  onSubmitRacingCount(event) {
    event.preventDefault();
    const racingCount = Number(this.racingCountInput.value);
    console.log(racingCount);
  }
}
