import Car from './Car.js';

class Game {
  constructor(cars) {
    this.cars = cars.map(name => new Car(name));
    console.log(this.cars);
  }
}

export default Game;
