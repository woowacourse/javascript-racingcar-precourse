import { Car } from '../../models';

export default class RacingCarModel {
  constructor() {
    this._cars = null;
  }

  makeCarInstances(cars) {
    const instances = cars.map(car => {
      return new Car(car);
    });

    this._cars = instances;
  }

  progress() {
    this._cars.forEach(car => {
      car.moveForward();
    });
  }

  getCars() {
    return this._cars;
  }
}
