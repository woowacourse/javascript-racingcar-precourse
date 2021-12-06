import Car from '../components/Car.js';

class CarController {
  constructor() {
    this.$cars = [];
  }

  getCars() {
    return this.$cars;
  }

  addCars(splittedCarNames) {
    splittedCarNames.forEach(carName => this.$cars.push(new Car(carName)));
  }

  resetCarsAdvance() {
    this.$cars.forEach(car => car.resetAdvance());
  }

  advanceCars() {
    this.$cars.forEach(car => car.advance());
  }

  initCars() {
    this.$cars = [];
  }

  checkExistCars() {
    return this.$cars.length !== 0;
  }
}

export default CarController;
