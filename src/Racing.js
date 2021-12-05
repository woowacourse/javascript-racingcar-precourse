import Car from "./Car.js";
import Render from "./Render.js";

export default class Racing {
  constructor(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.render = new Render();
  }

  start() {
    const Cars = this.prepareCar();
    for (let round = 1; round <= this.racingCount; round += 1) {
      this.startRound(Cars);
    }
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

  startRound(cars) {
    cars.forEach(car => {
      const isGoFoward = car.moving();
      car.saveRoundResult(isGoFoward);
    });
    this.render.showRoundResult(cars);
  }
}
