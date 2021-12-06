import Car from './Car.js';
import Form from './Form.js';
import Render from './Render.js';
import { isValidCarNames, isValidRacingCount } from './utils/validations.js';

export default class RacingGame {
  constructor() {
    this.carNames = [];
    this.count = 0;
    this.render = new Render();
  }

  initForm() {
    this.carNamesForm = new Form('car-names');
    this.racingCountForm = new Form('racing-count');
    this.carNamesForm.addClickEvent(this.onSubmitCarNames.bind(this));
    this.racingCountForm.addClickEvent(this.onSubmitRacingCount.bind(this));
  }

  onSubmitCarNames(input) {
    const carNames = input.value.split(',');
    if (!isValidCarNames(carNames)) {
      this.render.carNamesGuideUnverified();
      this.render.resetResult();
      this.carNames = [];
      return;
    }
    this.render.carNamesGuideVerified();
    this.carNames = carNames;
    if (this.isReadyForGame()) this.play();
  }

  onSubmitRacingCount(input) {
    const racingCount = Number(input.value);
    if (!isValidRacingCount(racingCount)) {
      this.render.racingCountGuideUnverified();
      this.render.resetResult();
      this.count = 0;
      return;
    }
    this.render.racingCountGuideVerified();
    this.count = racingCount;
    if (this.isReadyForGame()) this.play();
  }

  isReadyForGame() {
    return this.carNames.length !== 0 && this.count !== 0;
  }

  play() {
    this.render.resetResult();
    this.cars = this.carNames.map((name) => new Car(name));

    this.render.showResultTitle();
    for (let round = 0; round < this.count; round += 1) {
      this.runRound(round);
    }

    const winnerNames = this.getWinnerNames();
    this.render.winners(winnerNames);
  }

  runRound(round) {
    this.cars.forEach((car) => car.play());
    const states = this.cars.map((car) => car.state());
    this.render.racingState(round, states);
  }

  getWinnerNames() {
    const maxStep = Math.max(...this.cars.map((car) => car.step));
    const winners = this.cars.filter((car) => car.step === maxStep);
    return winners.map((winner) => winner.name);
  }
}
