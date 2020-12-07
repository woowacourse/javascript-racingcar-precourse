import { Car } from '../../models';

export default class RacingCarGameModel {
  constructor() {
    this._carInstances = null;
    this._racingCount = null;
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

  registerViewModels(viewModel) {
    this.subscriber.push(viewModel);
  }

  gameContinue() {
    this._carInstances.forEach(car => {
      car.moveForward();
    });
  }
}
