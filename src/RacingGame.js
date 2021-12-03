import Car from './Car.js';

export default class RacingGame {
  constructor() {
    this.setResultElements();
    this.carNames = [];
    this.racingCount = 0;
  }

  setCarNames(carNames) {
    this.carNames = carNames;
  }

  setRacingCount(count) {
    this.racingCount = count;
  }

  setResultElements() {
    const resultContainer = document.createElement('div');
    resultContainer.setAttribute('id', 'game-result');
    document.querySelector('#app').appendChild(resultContainer);
    this.resultContainer = resultContainer;
  }

  play() {
    this.cars = this.carNames.map((name) => new Car(name));
    for (let order = 0; order < this.racingCount; order += 1) {
      this.racing(order);
    }
    this.printWinner();
  }

  resetResultContainer() {
    this.resultContainer.innerHTML = '';
  }

  isReadyForGame() {
    return this.carNames.length !== 0 && this.racingCount !== 0;
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
