import Car from '../Car/Car.js';
import RandomNumber from '../getRandomNumber/RandomNumber.js';

export default class Game {
  constructor(racingCount, carNames) {
    this.racingCount = racingCount;
    this.carNames = carNames;
    this.randomNumbers = [];
    this.resultRacing = [];
  }

  getResultString = (car) => {
    return car.resultString();
  };

  isMoveCar = (randomNumber, car) => {
    if (randomNumber >= 4) {
      car.distanceIncrease();
    }
  };

  racingGameStart = () => {
    this.carNames.forEach((currentCarName, currentCarIndex) => {
      const currentCar = new Car(currentCarName);
      const currentCarResultRacing = [];

      for (let currentCount = 0; currentCount < this.racingCount; currentCount += 1) {
        this.isMoveCar(this.randomNumbers[currentCount][currentCarIndex], currentCar);
        currentCarResultRacing.push(this.getResultString(currentCar));
      }

      this.resultRacing.push(currentCarResultRacing);
    });
  };

  getRandomNumbers = () => {
    this.randomNumber = new RandomNumber(this.carNames, this.racingCount);
    this.randomNumbers = this.randomNumber.get();
  };

  start = () => {
    this.getRandomNumbers();
    this.racingGameStart();
  };
}
