import Car from "./Car.js";

export default class Racing {
  constructor(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
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
    return this.carNames.map(carName => new Car(carName));
  }

  startRound(cars) {
    cars.forEach(car => car.moving());
  }
}
