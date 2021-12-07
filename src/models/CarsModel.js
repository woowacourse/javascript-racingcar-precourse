import Car from './Car.js';

export default {
  cars: [],
  getCars() {
    return this.cars;
  },
  setCars(carNames) {
    this.cars = [...carNames.map((name) => new Car(name))];
  },
};
