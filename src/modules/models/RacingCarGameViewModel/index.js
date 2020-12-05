import { Car } from '../../models';

function setInstances(target, property, names) {
  const instances = names.map(name => {
    return new Car(name);
  });
  target._carInstances = instances;

  return true;
}

function setRacingCount(target, property, count) {
  target._racingCount = count;
  return true;
}

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
          return setInstances(target, property, value);
        }
        if (property === '_racingCount') {
          return setRacingCount(target, property, value);
        }
      },
    });
  }

  publish() {
    const self = this;
    this.subscribers.every(subscriber => {
      subscriber.update(self);
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

    // publish();
  }
}
