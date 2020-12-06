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

  runEachRace() {
    const eachRaceCarPositions = {};

    for (let car of this.racingCars) {
      const randomNumber = this.generateRandomNumber();
      car.move(randomNumber);

      eachRaceCarPositions[car.name] = car.position;
    }

    return eachRaceCarPositions;
  }

  runAllRaces() {
    const allRaceCarPositions = [];

    for (let i = 0; i < this.racingCount; i++) {
      const eachRace = this.runEachRace();
      allRaceCarPositions.push(eachRace);
    }

    return allRaceCarPositions;
  }
}

// //test
// new RacingCarGame(["east", "west"], 3);
