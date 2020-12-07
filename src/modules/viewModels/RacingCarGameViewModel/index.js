export default class RacingCarGameViewModel {
  constructor(RacingCarGameModel) {
    this.racingCarGameModel = RacingCarGameModel;
    this._carInstances = null;
    this.subscriber = [];
    this.init();

    return this.setProxy();
  }

  init() {
    this.subscribeModel(this.racingCarGameModel);
  }

  setProxy() {
    return new Proxy(this, {
      get(target, property) {
        return target[property];
      },

      set(target, property, value) {
        if (property === '_carInstances') {
          target.racingCarGameModel[property] = value;
        }
        if (property === '_racingCount') {
          target.racingCarGameModel[property] = value;
        }

        return true;
      },
    });
  }

  subscribeModel(target) {
    target.registerViewModels(this);
  }

  registerViews(target) {
    this.subscriber.push(target);
  }

  updateChange(target) {
    this._carInstances = target._carInstances;
    this.notifyChange();
  }

  notifyChange() {
    this.subscriber.forEach(subscriber => {
      subscriber.updateChange(this);
    });
  }
}
