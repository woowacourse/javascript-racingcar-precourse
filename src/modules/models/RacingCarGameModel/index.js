import { Car } from '../../models';

export default class RacingCarGameModel {
  constructor() {
    this._carInstances = null;
  }

  setCarInstances(names) {
    const instances = names.map(name => {
      return new Car(name);
    });

    this._carInstances = instances;
  }

  getCarInstances() {
    return [...this._carInstances];
  }

  gameContinue() {
    this._carInstances.forEach(car => {
      car.moveForward();
    });
  }
}
