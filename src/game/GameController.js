import Car from './Car.js';
import View from '../view/View.js';

function getCars(userInput) {
  const cars = [];

  userInput.getCarNames().forEach((name) => {
    cars.push(new Car(name));
  });
  return cars;
}

function goOnce(cars) {
  cars.forEach((car) => car.go());
}

function getCarPositions(cars) {
  return cars.map((car) => car.getPosition());
}

function getMaxPosition(cars) {
  return Math.max.apply(null, getCarPositions(cars));
}

function getWinners(cars) {
  const max = getMaxPosition(cars);
  return cars.filter((car) => car.getPosition() === max);
}

export default class GameController {
  constructor(userInput) {
    this.userInput = userInput;
    this.view = new View();
    this.cars = getCars(this.userInput);
  }

  repeatRace() {
    for (let index = 0; index < this.userInput.getRepeatCount(); index += 1) {
      goOnce(this.cars);
      this.view.showRaceResult(this.cars);
    }
  }

  decideWinners() {
    const winners = getWinners(this.cars);

    View.showWinners(winners);
  }
}
