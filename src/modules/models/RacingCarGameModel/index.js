import { Car } from '../../models';

export default class RacingCarGameModel {
  constructor() {
    this._carInstances = null;
    this._racingCount = null;
    this.subscriber = [];
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

  setRacingCountAndGameContinue(count) {
    this._racingCount = count;

    while (this._racingCount) {
      this.gameContinue();
    }
  }

  registerViewModels(viewModel) {
    this.subscriber.push(viewModel);
  }

  notifyChange() {
    this.subscriber.forEach(subscriber => {
      subscriber.updateChange(this);
    });
  }

  gameContinue() {
    this._carInstances.forEach(car => {
      car.moveForward();
    });
    this._racingCount--;

    this.notifyChange();
  }
}
