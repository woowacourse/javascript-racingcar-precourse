import { Car } from '../../models';

export default class RacingCarGameViewModel {
  constructor() {
    this.subscribers = [];
    this._carInstances = null;
    this._racingCount = null;

    return new Proxy(this, {
      get(target, property) {
        return target[property];
      },

      set(target, property, value) {
        if (property === '_carInstances') {
          return target.setInstances(target, property, value);
        }
        if (property === '_racingCount') {
          return target.setRacingCountAndGameContinue(target, property, value);
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

  setRacingCountAndGameContinue(target, property, count) {
    target._racingCount = count;

    while (target._racingCount) {
      target.gameContinue();
      target._racingCount--;
    }

    return true;
  }

  notifyChange() {
    const self = this;
    this.subscribers.every(subscriber => {
      subscriber.updateChange(self);
      return true;
    });
  }

  registerViews(target) {
    this.subscribers.push(target);
  }

  gameContinue() {
    this._carInstances.forEach(car => {
      car.moveForward();
    });

    this.notifyChange();
  }
}
