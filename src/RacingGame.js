import Car from './Car.js';
import { isValidCarNames, isValidRacingCount } from './utils/validations.js';

export default class RacingGame {
  constructor() {
    this.setInputElements();
    this.setSubmitButton();
    this.setResultElements();
    this.carsReady = false;
    this.racingCountReady = false;
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
      this.carsReady = false;
      return;
    }
    this.carsReady = true;
    this.start();
  }

  onSubmitRacingCount(event) {
    event.preventDefault();
    const racingCount = Number(this.racingCountInput.value);
    if (!isValidRacingCount(racingCount)) {
      this.racingCountReady = false;
      return;
    }
    this.racingCountReady = true;
    this.start();
  }

  start() {
    if (!this.isReadyForGame()) return;
    this.setGameValue();
    for (let racing = 0; racing < this.racingCount; racing += 1) {
      console.log(`=-=-=- racing ${racing} =-=-=-`);
      this.racing();
    }
  }

  isReadyForGame() {
    return this.carsReady && this.racingCountReady;
  }

  racing() {
    this.cars.forEach((car) => car.play());
  }

  setGameValue() {
    const carNames = this.carNamesInput.value.split(',');
    const racingCount = Number(this.racingCountInput.value);
    this.cars = carNames.map((name) => new Car(name));
    this.racingCount = racingCount;
  }
}
