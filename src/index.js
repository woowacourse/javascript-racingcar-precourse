import { getUserInputArray, getUserInputForCarNames } from './user.js';
import Car from './car.js';
import { setInitialStyle, displayCountForm } from './dom.js';

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
}

setInitialStyle();

const game = new Game();
const carNamesSubmitButton = document.getElementById('car-names-submit');

carNamesSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();
  game.createCars();
});
