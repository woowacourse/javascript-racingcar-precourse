import Car from '../Car/Car.js';
import { DOM } from '../constant/constant.js';
import RandomNumber from '../getRandomNumber/RandomNumber.js';

export default class Game {
  constructor(racingCount, carNames) {
    this.$app = DOM.$APP;
    this.$div = DOM.$DIV;
    this.racingCount = racingCount;
    this.carNames = carNames;
    this.randomNumbers = [];
    this.resultRacings = [];
    this.template = '';
  }

  renderTemplate = () => {
    this.$div.innerHTML = this.template;
    this.$app.appendChild(this.$div);
  };

  getTemplate = () => {
    for (let columnIndex = 0; columnIndex < this.resultRacings[0].length; columnIndex += 1) {
      for (let rowIndex = 0; rowIndex < this.resultRacings.length; rowIndex += 1) {
        this.template += `<div>${this.resultRacings[rowIndex][columnIndex]}</div>`;
      }

      this.template += '<br />';
    }
  };

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

      this.resultRacings.push(currentCarResultRacing);
    });
  };

  getRandomNumbers = () => {
    this.randomNumber = new RandomNumber(this.carNames, this.racingCount);
    this.randomNumbers = this.randomNumber.get();
  };

  start = () => {
    this.getRandomNumbers();
    this.racingGameStart();
    this.getTemplate();
    this.renderTemplate();
  };
}
