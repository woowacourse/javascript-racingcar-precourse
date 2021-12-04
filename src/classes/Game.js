import Car from './Car.js';

class Game {
  constructor(cars) {
    this.cars = cars.map(name => new Car(name));
  }

  advanceCar() {
    this.cars.forEach(car => car.advance());

    return this.cars;
  }
}

export default Game;
