import Car from "./Car.js";

export default class RacingCarGame {
  constructor(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.racingCars = [];
  }

  setRacingCars = () => {
    this.carNames.forEach(carName => {
      const car = new Car(carName);
      this.racingCars.push(car);
    });
  };

  play = () => {
    this.setRacingCars();
  };
}
