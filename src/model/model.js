import Car from './car.js';
import NUMBER from '../constants/number.js';

export default class Model {
  constructor() {
    this.cars = [];
    this.count = 0;
  }

  saveCars(userInput) {
    const userInputArray = userInput.split(',');

    if (this.isValidatedLength(userInputArray, NUMBER.CARS_MIN_LENGTH)) {
      this.cars = userInputArray.map((name) => new Car(name));

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

      return true;
    }
    throw Error('1이상의 숫자를 입력해주세요!');
  }

  isValidatedCount(userInputNum, countSize) {
    return userInputNum >= countSize;
  }
}
