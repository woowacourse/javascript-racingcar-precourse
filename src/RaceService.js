const Car = require('./domain/Car');
const { get } = require('./RandomNumber');

class RaceService {
  #cars;

  createCar(cars) {
    this.#cars = cars.map((car) => new Car(car));
  }

  play() {
    this.#cars.forEach((car) => car.goOrstop(get()));
    const result = this.printResult();
    return result;
  }

  printResult() {
    const map = new Map();

    this.#cars.forEach((car) => {
      const [name, go] = car.getResult();
      map.set(name, go);
    });

    return map;
  }
}

module.exports = RaceService;
