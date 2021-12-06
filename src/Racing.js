import Car from "./Car.js";
import Render from "./Render.js";

export default class Racing {
  constructor(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
  }

  start() {
    const cars = this.prepareCar();
    const render = new Render();
    render.makeResultArea();
    for (let round = 1; round <= this.racingCount; round += 1) {
      this.startOneRound(cars, render);
    }
    this.showRacingWinner(cars, render);
  }

  showRacingWinner(cars, render) {
    const winnerDistance = Math.max(...cars.map(car => car.progress.length));
    const winner = cars
      .filter(car => car.progress.length === winnerDistance)
      .map(car => car.name)
      .join(", ");
    render.winner(winner);
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

  startOneRound(cars, render) {
    cars.forEach(car => {
      const isGoFoward = car.moving();
      car.updateProgress(isGoFoward);
    });
    render.makeRoundResult(cars);
  }
}
