import Car from './Car.js';

class Game {
  constructor(cars) {
    this.cars = cars.map(name => new Car(name));
  }

  advanceCar() {
    this.cars.forEach(car => car.advance());

    return this.cars;
  }

  getWinner() {
    let maxDistance = 0;
    this.cars.forEach(car => {
      maxDistance = Math.max(maxDistance, car.distance.length);
    });

    return this.cars.filter(car => car.distance.length === maxDistance);
  }
}

export default Game;
