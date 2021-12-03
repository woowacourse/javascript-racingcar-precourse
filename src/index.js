import {
  getUserInputArray,
  getUserInputForCarNames,
  getUserInputForCount,
} from './user.js';
import Car from './car.js';
import {
  setInitialStyle,
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
    console.log(this.cars);
  }

  getCount() {
    this.count = getUserInputForCount();
    console.log(getUserInputForCount());
  }

  startGame() {
    let index = 0;

    if (this.count === 0) {
      return;
    }

    displayResultText();

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

    console.log(this.winners);
  }
}

setInitialStyle();

const game = new Game();
const carNamesSubmitButton = document.getElementById('car-names-submit');

carNamesSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();
  game.createCars();
});

const racingCountSubmit = document.getElementById('racing-count-submit');

racingCountSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  game.getCount();
  game.startGame();
});
