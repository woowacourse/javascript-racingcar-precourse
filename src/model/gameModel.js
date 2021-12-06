import Car from './car.js';
import NUMBER from '../constants/number.js';

export default class GameModel {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.winners = [];
    this.isSubmitted = {
      cars: false,
      count: false,
    };
  }

  saveCars(userInput) {
    const userInputArray = userInput.split(',');

    if (this.isValidatedLength(userInputArray, NUMBER.CARS_MIN_LENGTH)) {
      this.cars = userInputArray.map((name) => new Car(name));
      this.isSubmitted.cars = true;

      return true;
    }

    throw Error('2대이상의 차 이름을 넣어주세요');
  }

  isValidatedLength(userInputArray, givenLength) {
    return userInputArray.length >= givenLength;
  }

  saveCount(userInput) {
    const userInputNum = Number(userInput);

    if (this.isValidatedCount(userInputNum, NUMBER.COUNT_LEAST_VALUE)) {
      this.count = userInputNum;
      this.isSubmitted.count = true;

      return true;
    }
    throw Error('1이상의 숫자를 입력해주세요!');
  }

  isValidatedCount(userInputNum, countSize) {
    return userInputNum >= countSize;
  }

  isAllSubmitted() {
    return Object.values(this.isSubmitted).every((value) => value === true);
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
