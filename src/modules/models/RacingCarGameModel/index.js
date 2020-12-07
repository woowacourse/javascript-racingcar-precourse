import { Car } from '../../models';

export default class RacingCarGameModel {
  constructor() {
    this._carInstances = null;
    return this.setProxy();
  }

  setProxy() {
    return new Proxy(this, {
      get(target, property) {
        return target[property];
      },

      set(target, property, value) {
        if (property === '_carInstances') {
          return target.setInstances(target, property, value);
        }
        if (property === '_racingCount') {
          // return target.setRacingCountAndGameContinue(target, property, value);
        }
      },
    });
  }

  setInstances(target, property, names) {
    const instances = names.map(name => {
      return new Car(name);
    });
    target._carInstances = instances;

    return true;
  }
}
