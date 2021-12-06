import Car from './car.js';
import NUMBER from '../constants/number.js';

export default class Model {
  constructor() {
    this.cars = [];
  }

  saveCars(userInput) {
    const userInputArray = userInput.split(',');

    if (this.isValidatedLength(userInputArray, NUMBER.CARS_MIN_LENGTH)) {
      this.cars = userInputArray.map((name) => new Car(name));
    }
  }

  isValidatedLength(userInputArray, givenLength) {
    return userInputArray.length >= givenLength;
  }
}
