import Car from './Car.js';

function getCars(userInput) {
  const cars = [];

  userInput.getCarNames().forEach((name) => {
    cars.push(new Car(name));
  });
  return cars;
}

export default class GameController {
  constructor(userInput) {
    this.cars = getCars(userInput);
  }
}
