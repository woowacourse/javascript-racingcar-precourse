const { SPLITTER } = require('../settings');
const Car = require('./Car');

class CarGame {
  #cars;

  generateCars(input) {
    const names = input.split(SPLITTER).map((name) => name);

    this.#cars = names.map((name) => new Car(name));
  }

  moveOnce(pickNumber) {
    return this.#cars.map((car) => car.moveOnce(pickNumber));
  }

  static getWinner(movingResult) {
    const maxMoves = Math.max(...movingResult.map(({ moveCount }) => moveCount));
    const winners = movingResult
      .filter(({ moveCount }) => moveCount === maxMoves)
      .map(({ name }) => name);

    return winners;
  }
}

module.exports = CarGame;
