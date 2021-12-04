import Car from '../Car/Car.js';
import { DOM } from '../constant/constant.js';
import RandomNumber from '../getRandomNumber/RandomNumber.js';
import Winners from './Winners.js';

export default class Game {
  constructor(racingCount, carNames) {
    this.$app = DOM.$APP;
    this.$div = DOM.$DIV;
    this.racingCount = racingCount;
    this.carNames = carNames;
    this.carResultInformations = [];
    this.randomNumbers = [];
    this.resultRacings = [];
    this.racingTemplate = '';
  }

  renderTemplate = (template) => {
    this.$div.innerHTML = template;
    this.$app.appendChild(this.$div);
  };

  getRacingTemplate = () => {
    for (let columnIndex = 0; columnIndex < this.resultRacings[0].length; columnIndex += 1) {
      for (let rowIndex = 0; rowIndex < this.resultRacings.length; rowIndex += 1) {
        this.racingTemplate += `<div>${this.resultRacings[rowIndex][columnIndex]}</div>`;
      }

      this.racingTemplate += '<br />';
    }

    this.renderTemplate(this.racingTemplate);
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

      this.carResultInformations.push(currentCar.information());
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
    this.getRacingTemplate();

    const winners = new Winners(this.carResultInformations);
    winners.getWinners();
    winners.countWinners();
  };
}
