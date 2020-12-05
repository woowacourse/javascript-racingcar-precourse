import Car from "./Car.js";
import { getRandomNumber } from "./Utils.js";

export default class RacingCarGame {
  constructor(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.racingCars = [];
    this.MIN_RANDOM_NUMBER = 0;
    this.MAX_RANDOM_NUMBER = 9;
    this.ADD_STEP_STANDARD = 4;
  }

  setRacingCars = () => {
    this.carNames.forEach(carName => {
      const car = new Car(carName);
      this.racingCars.push(car);
    });
  };

  updateCarStep = car => {
    const randomNumber = getRandomNumber(
      this.MIN_RANDOM_NUMBER,
      this.MAX_RANDOM_NUMBER
    );

    if (randomNumber >= this.ADD_STEP_STANDARD) {
      car.step++;
    }
  };

  play = () => {
    this.setRacingCars();
  };
}
