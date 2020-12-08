export default class RacingCarGameViewModel {
  constructor(RacingCarGameModel) {
    this.racingCarGameModel = RacingCarGameModel;
    this.subscriber = [];
    this._carInstances = null;
    this._racingCount = null;

    return this.setProxy();
  }

  setProxy() {
    return new Proxy(this, {
      set(target, property, value) {
        if (property === '_carInstances') {
          target.racingCarGameModel.setCarInstances(value);
        }

        if (property === '_racingCount') {
          target.setRacingCountAndGameProgress(target, value);
        }

        return true;
      },
    });
  }

  setRacingCountAndGameProgress(target, value) {
    target._racingCount = value;
    while (target._racingCount) {
      target.racingCarGameModel.letCarsMoveForward();
      target._carInstances = target.racingCarGameModel.getCarInstances();
      target.notifyChange();
      target._racingCount--;
    }
  }

  registerViews(target) {
    this.subscriber.push(target);
  }

  notifyChange() {
    this.subscriber.forEach(subscriber => {
      subscriber.updateChange(this);
    });
  }
}
