import Car from './Car.js';

export default {
  cars: [],
  getCars() {
    return this.cars;
  },
  setCars(carNames) {
    this.cars = [...carNames.map((name) => new Car(name))];
  },
  raceCars() {
    for (const car of this.cars) {
      car.race();
    }
    return this.cars;
  },
  play(count) {
    for (let i = 0; i < count; i += 1) {
      this.raceCars();
    }
  },
};
