const Car = require('./domain/Car');

class RaceService {
  #cars;

  createCar(cars) {
    this.#cars = cars.map((car) => new Car(car));
  }
}

module.exports = RaceService;
