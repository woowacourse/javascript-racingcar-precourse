import { Car } from '../../models';

export default class RacingCarGame {
  constructor() {
    this._carInstances = null;
  }

  makeCarInstances(splitedNames) {
    const instances = splitedNames.map(name => {
      return new Car(name);
    });

    this._carInstances = instances;
  }

  getCarInstances() {
    return this._carInstances;
  }

  gameContinue() {
    this._carInstances.forEach(car => {
      car.moveForward();
    });
  }
}
