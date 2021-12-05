import Car from "./Car.js";
import Render from "./Render.js";

export default class Racing {
  constructor(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.render = new Render();
  }

  start() {
    const cars = this.prepareCar();
    for (let round = 1; round <= this.racingCount; round += 1) {
      this.startOneRound(cars);
    }
    this.showRacingWinner(cars);
  }

  showRacingWinner(cars) {
    const winnerDistance = Math.max(...cars.map(car => car.progress.length));
    const winner = cars
      .filter(car => car.progress.length === winnerDistance)
      .map(car => car.name)
      .join(", ");
    this.render.winner(winner);
  }

  setCarNames() {
    this.carNames = this.carNames
      .split(",")
      .map(name => name.replace(/\s*/g, ""));
  }

  prepareCar() {
    this.setCarNames();
    const cars = this.carNames.map(carName => new Car(carName));
    cars.forEach(car => car.prepareRacing());
    return cars;
  }

  startOneRound(cars) {
    cars.forEach(car => {
      const isGoFoward = car.moving();
      car.updateProgress(isGoFoward);
    });
    this.render.showRoundResult(cars);
  }
}
