import Car from './car.js';
import MESSAGE from '../constants/message.js';
import { throwError } from '../utils/error.js';
import { isValidatedCarNames, isValidatedRacingCount } from './validator.js';

export default class GameModel {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
    this.winners = [];
    this.isPlayed = false;
  }

  setCars(userInput) {
    const userInputArray = userInput.split(',');

    if (isValidatedCarNames(userInputArray)) {
      this.cars = userInputArray.map((name) => new Car(name));

      return true;
    }
  }

  setRacingCount(userInputString) {
    if (isValidatedRacingCount(userInputString)) {
      this.racingCount = Number(userInputString);

      return true;
    }

    return throwError(MESSAGE.ERROR.NOT_MEET_RACING_COUNT_CONDITION);
  }

  setIsPlayed(booleanValue) {
    this.isPlayed = booleanValue;
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
