export default class RacingCarGameViewModel {
  constructor(RacingCarGameModel) {
    this.racingCarGameModel = RacingCarGameModel;
    this.subscriber = [];
    this._carInstances = null;
    this._racingCount = null;
    this.init();

    return this.setProxy();
  }

  init() {
    this.subscribeModel(this.racingCarGameModel);
  }

  setProxy() {
    return new Proxy(this, {
      set(target, property, value) {
        if (property === '_carInstances') {
          target.racingCarGameModel.setCarInstances(value);
        }
        if (property === '_racingCount') {
          for (let i = 0; i < value; i++) {
            target.racingCarGameModel.gameContinue();
            target._carInstances = target.racingCarGameModel.getCarInstances();
            target.notifyChange();
          }
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
