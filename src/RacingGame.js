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
    const resultContainer = document.createElement('div');
    resultContainer.setAttribute('id', 'game-result');
    document.querySelector('#app').appendChild(resultContainer);
    this.resultContainer = resultContainer;
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
    this.initializeGame();
    for (let order = 0; order < this.racingCount; order += 1) {
      this.racing(order);
    }
    this.printWinner();
  }

  isReadyForGame() {
    return this.carsReady && this.racingCountReady;
  }

  initializeGame() {
    const carNames = this.carNamesInput.value.split(',');
    const racingCount = Number(this.racingCountInput.value);
    this.cars = carNames.map((name) => new Car(name));
    this.racingCount = racingCount;
    this.resultContainer.innerHTML = '';
  }

  racing(order) {
    this.cars.forEach((car) => car.play());
    this.printRacingResult(order);
  }

  printRacingResult(order) {
    const racingResultContainer = document.createElement('p');
    racingResultContainer.setAttribute('id', `racing-${order}-result`);
    this.cars.forEach((car) => {
      const carStateContainer = document.createElement('span');
      const br = document.createElement('br');
      carStateContainer.innerText = car.state();
      racingResultContainer.appendChild(carStateContainer);
      racingResultContainer.appendChild(br);
    });
    this.resultContainer.appendChild(racingResultContainer);
  }

  printWinner() {
    const winnerName = this.getWinnerName().join(',');
    const winnerContainer = document.createElement('p');
    const winnerNameContainer = document.createElement('span');
    winnerContainer.innerText = '최종 우승자: ';
    winnerNameContainer.setAttribute('id', 'racing-winners');
    winnerNameContainer.innerText = winnerName;
    winnerContainer.appendChild(winnerNameContainer);
    this.resultContainer.appendChild(winnerContainer);
  }

  getWinnerName() {
    const maxStep = Math.max(...this.cars.map((car) => car.step));
    const winners = this.cars.filter((car) => car.step === maxStep);
    return winners.map((winner) => winner.name);
  }
}
