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
} from './dom_control.js';
import { noCountException } from './exception.js';

export default class Game {
  constructor() {
    this._cars = [];
    this._count = 0;
    this._winners = [];
    this._winnerScore = 0;
  }

  _getCarNames() {
    const userInput = getUserInputForCarNames();

    return getUserInputArray(userInput);
  }

  createCars() {
    const carNamesArray = this._getCarNames();

    if (carNamesArray.length === 0) {
      return;
    }

    carNamesArray.forEach((carName) => {
      this._cars.push(new Car(carName));
    });

    displayCountForm();
  }

  getCount() {
    this._count = getUserInputForCount();
  }

  _race() {
    this._cars.forEach((car) => {
      car.goOrStop();
    });

    createRacingLog(this._cars);
  }

  _determineWinner() {
    this._cars.forEach((car) => {
      if (car.location > this._winnerScore) {
        this._winnerScore = car.location;
      }
    });

    this._cars.forEach((car) => {
      if (car.location === this._winnerScore) {
        this._winners.push(car.name);
      }
    });

    createWinnersText(this._winners);
  }

  startGame() {
    if (this._count === 0) {
      noCountException();
      return;
    }

    displayResultText();

    let index = 0;
    for (index = 0; index < this._count; index++) {
      this._race();
    }

    this._determineWinner();
  }
}
