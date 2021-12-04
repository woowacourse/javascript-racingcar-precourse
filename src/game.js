import {
  getUserInputArray,
  getUserInputForCarNames,
  getUserInputForCount,
} from './user.js';
import Car from './car.js';
import {
  displayCountForm,
  createRacingLog,
  createWinnersText,
  displayResultText,
} from './dom.js';
import { noCountException } from './exception.js';

export default class Game {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.winners = [];
    this.winnerScore = 0;
  }

  getCarNames() {
    const userInput = getUserInputForCarNames();

    return getUserInputArray(userInput);
  }

  createCars() {
    const carNamesArray = this.getCarNames();

    if (carNamesArray.length === 0) {
      return;
    }

    carNamesArray.forEach((carName) => {
      this.cars.push(new Car(carName));
    });

    displayCountForm();
  }

  getCount() {
    this.count = getUserInputForCount();
  }

  startGame() {
    if (this.count === 0) {
      noCountException();
      return;
    }

    displayResultText();

    let index = 0;
    for (index = 0; index < this.count; index++) {
      this.race();
    }

    this.determineWinner();
  }

  race() {
    this.cars.forEach((car) => {
      car.goOrStop();
    });

    createRacingLog(this.cars);
  }

  determineWinner() {
    this.cars.forEach((car) => {
      if (car.location > this.winnerScore) {
        this.winnerScore = car.location;
      }
    });

    this.cars.forEach((car) => {
      if (car.location === this.winnerScore) {
        this.winners.push(car.name);
      }
    });

    createWinnersText(this.winners);
  }
}
