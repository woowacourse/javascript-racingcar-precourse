import Car from './Car.js';
import RandomNumber from '../utils/RandomNumber.js';

export default class Game {
  constructor(racingCount, carNames) {
    this.racingCount = racingCount;
    this.carNames = carNames;
    this.carResultInformations = [];
    this.randomNumbers = [];
    this.resultRacings = [];
    this.resultTemplate = '';
  }

  getResultTemplate = () => {
    for (let columnIndex = 0; columnIndex < this.resultRacings[0].length; columnIndex += 1) {
      for (let rowIndex = 0; rowIndex < this.resultRacings.length; rowIndex += 1) {
        this.resultTemplate += `<span>${this.resultRacings[rowIndex][columnIndex]}</span><br />`;
      }

      this.resultTemplate += '<br />';
    }

    return this.resultTemplate;
  };

  getResultString = (car) => car.resultString();

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

      this.carResultInformations.push(currentCar.information());
      this.resultRacings.push(currentCarResultRacing);
    });
  };

  getRandomNumbers = () => {
    this.randomNumber = new RandomNumber(this.carNames, this.racingCount);
    this.randomNumbers = this.randomNumber.get();
  };

  getResultInformations = () => this.carResultInformations;

  start = () => {
    this.getRandomNumbers();
    this.racingGameStart();
  };
}
