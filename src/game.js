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

  countMaxDistance() {
    const carsDistance = this.racingCars.map((car) => car.distance);
    const maxDistance = Math.max(...carsDistance);

    return maxDistance;
  }

  getWinnerNames() {
    const maxDistance = this.countMaxDistance();
    const winners = this.racingCars.filter((car) => car.distance === maxDistance);
    const winnerNames = winners.map((car) => car.name);

    return winnerNames;
  }

  createRaceHTML(raceCarPositions) {
    let raceHTML = `<p>`;

    for (let carPosition of raceCarPositions) {
      for (let carName in carPosition) {
        raceHTML += `${carName}: ${carPosition[carName]}<br>`;
      }

      raceHTML += `</p>`;
    }

    return raceHTML;
  }

  createWinnerHTML(winners) {
    const winnerString = winners.join(",");
    const winnerHTML = `<div> 최종 우승자: ${winnerString} </div>`;

    return winnerHTML;
  }
}

// //test
// new RacingCarGame(["east", "west"], 3);
