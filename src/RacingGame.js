import Car from './Car.js';
import Render from './Render.js';

export default class RacingGame {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;
    this.render = new Render();
  }

  setCarNames(carNames) {
    this.carNames = carNames;
  }

  setRacingCount(count) {
    this.racingCount = count;
  }

  resetResult() {
    this.render.resetResult();
  }

  isReadyForGame() {
    return this.carNames.length !== 0 && this.racingCount !== 0;
  }

  play() {
    this.cars = this.carNames.map((name) => new Car(name));

    this.render.showResultTitle();
    for (let order = 0; order < this.racingCount; order += 1) {
      this.racing(order);
    }

    const winnerNames = this.getWinnerNames();
    this.render.winners(winnerNames);
  }

  racing(order) {
    this.cars.forEach((car) => car.play());
    const states = this.cars.map((car) => car.state());
    this.render.racingState(order, states);
  }

  getWinnerNames() {
    const maxStep = Math.max(...this.cars.map((car) => car.step));
    const winners = this.cars.filter((car) => car.step === maxStep);
    return winners.map((winner) => winner.name);
  }
}
