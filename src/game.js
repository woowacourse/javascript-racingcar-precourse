import Car from "./car.js";
export default class RacingCarGame {
  constructor(carNames, racingCount) {
    this.racingCars = this.createCars(carNames);
    this.racingCount = racingCount;
  }

  createCars(carNames) {
    const cars = carNames.map((carName) => new Car(carName));
    return cars;
  }

  generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10); // 0~9
    return randomNumber;
  }
}

// //test
// new RacingCarGame(["east", "west"], 3);
