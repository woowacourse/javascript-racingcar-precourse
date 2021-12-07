import Car from './car.js';
import NUMBER from '../constants/number.js';
import MESSAGE from '../constants/message.js';
import { throwError } from '../utils/error.js';
import { isValidatedCarNames } from './validator.js';

export default class GameModel {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.winners = [];
  }

  saveCars(userInput) {
    const userInputArray = userInput.split(',');

    if (isValidatedCarNames(userInputArray)) {
      this.cars = userInputArray.map((name) => new Car(name));

      return true;
    }
  }

  saveCount(userInput) {
    const userInputNum = Number(userInput);

    if (this.isValidatedCount(userInputNum, NUMBER.MIN_COUNT)) {
      this.count = userInputNum;

      return true;
    }

    return throwError(MESSAGE.ERROR.NOT_MEET_COUNT_CONDITION);
  }

  isValidatedCount(userInputNum, countSize) {
    return userInputNum >= countSize;
  }

  setWinners(gameResult) {
    this.winners = this.getWinners(gameResult);
  }

  getWinners(gameResult) {
    const maxValue = this.findMaxValue(gameResult);

    return gameResult.reduce((acc, { name, position }) => {
      if (maxValue === position) acc.push(name);

      return acc;
    }, []);
  }

  findMaxValue(gameResult) {
    return gameResult.reduce((acc, { position }) => {
      if (position > acc) acc = position;

      return acc;
    }, 0);
  }
}
