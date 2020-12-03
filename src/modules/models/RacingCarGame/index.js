import { Car } from '../../models';

export default class RacingCarGame {
  constructor() {
    this._cars = null;
  }

  makeCarInstances(splitedNames) {
    const instances = splitedNames.map(name => {
      return new Car(name);
    });

    this._cars = instances;
  }

  gameContinue() {
    this._cars.forEach(car => {
      car.moveForward();
    });
  }

  getCars() {
    return this._cars;
  }
}
