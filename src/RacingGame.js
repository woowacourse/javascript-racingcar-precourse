import Car from './Car.js';
import Render from './Render.js';
import { isValidCarNames, isValidRacingCount } from './utils/validations.js';

export default class RacingGame {
  constructor() {
    this.carNames = [];
    this.count = 0;
    this.render = new Render();
  }

  setCarNames(carNames) {
    this.carNames = carNames;
  }

  setCount(count) {
    this.count = count;
  }

  resetResult() {
    this.render.resetResult();
  }

  isReadyForGame() {
    return this.carNames.length !== 0 && this.count !== 0;
  }

  play() {
    this.cars = this.carNames.map((name) => new Car(name));

    this.render.showResultTitle();
    for (let round = 0; round < this.count; round += 1) {
      this.racing(round);
    }

    const winnerNames = this.getWinnerNames();
    this.render.winners(winnerNames);
  }

  racing(round) {
    this.cars.forEach((car) => car.play());
    const states = this.cars.map((car) => car.state());
    this.render.racingState(round, states);
  }

  getWinnerNames() {
    const maxStep = Math.max(...this.cars.map((car) => car.step));
    const winners = this.cars.filter((car) => car.step === maxStep);
    return winners.map((winner) => winner.name);
  }

  onSubmitCarNames(input) {
    const carNames = input.value.split(',');
    this.resetResult();
    if (!isValidCarNames(carNames)) {
      this.setCarNames([]);
      return;
    }
    this.setCarNames(carNames);
    if (this.isReadyForGame()) this.play();
  }

  onSubmitRacingCount(input) {
    const racingCount = Number(input.value);
    this.resetResult();
    if (!isValidRacingCount(racingCount)) {
      this.setCount(0);
      return;
    }
    this.setCount(racingCount);
    if (this.isReadyForGame()) this.play();
  }
}
