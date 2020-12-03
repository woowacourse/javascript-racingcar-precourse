import { Car } from '../../models';

export default class RacingCarModel {
  constructor() {
    this._cars = null;
  }

  makeCarInstances(splitedNames) {
    const instances = splitedNames.map(name => {
      return new Car(name);
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
