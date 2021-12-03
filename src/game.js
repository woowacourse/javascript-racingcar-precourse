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

export default class Game {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.winners = [];
  }

  getCarNames() {
    const userInput = getUserInputForCarNames();
    const carNamesArray = getUserInputArray(userInput);

    return carNamesArray;
  }

  createCars() {
    const carNamesArray = this.getCarNames();

    if (carNamesArray.length == 0) {
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
    let maxScore = 0;

    this.cars.forEach((car) => {
      if (car.location > maxScore) {
        maxScore = car.location;
      }
    });

    this.cars.forEach((car) => {
      if (car.location === maxScore) {
        this.winners.push(car.name);
      }
    });

    createWinnersText(this.winners);
  }
}
