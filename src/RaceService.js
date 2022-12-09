const Car = require('./domain/Car');

class RaceService {
  #cars;

  #attempts;

  createCar(cars) {
    this.#cars = cars.map((car) => new Car(car));
  }

  getResult(attempts) {
    this.#attempts = attempts;
  }
}

module.exports = RaceService;
