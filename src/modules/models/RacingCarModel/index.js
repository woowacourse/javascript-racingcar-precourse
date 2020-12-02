import { Car } from '../../models';

export default class RacingCarModel {
  constructor(cars) {
    this._cars = null;
    this.makeCarInstances(cars);
  }

  makeCarInstances(cars) {
    const instances = cars.map(car => {
      new Car(car);
    });

    this._cars = instances;
  }

  progress() {
    const progressedCars = this._cars.map(car => {
      car.moveForward();
    });

    this._cars = progressedCars;
  }

  getCars() {
    return this._cars;
  }
}
