import { Car } from '../../models';

export default class RacingCarGameModel {
  constructor() {
    this._carInstances = null;
  }

  setInstances(target, property, names) {
    const instances = names.map(name => {
      return new Car(name);
    });
    target._carInstances = instances;

    return true;
  }
}
