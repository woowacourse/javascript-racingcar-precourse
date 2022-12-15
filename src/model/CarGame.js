const { SPLITTER } = require('../settings');
const Car = require('./Car');

class CarGame {
  #cars;

  #tryCount;

  generateCars(input) {
    const names = input.split(SPLITTER).map((name) => name);

    this.#cars = names.map((name) => new Car(name));
  }

  move(pickNumber) {
    const movingResult = this.#cars.map((car) => car.moveOnce(pickNumber));
  }
}

module.exports = CarGame;
