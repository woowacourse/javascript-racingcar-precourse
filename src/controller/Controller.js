import Model from '../model/Model.js';
import View from '../view/View.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    this.view.bindCreateCarList(this.addCars.bind(this));
    this.view.bindStartRace(this.startRace.bind(this));
  }

  addCars(nameList) {
    this.model.initCarList(nameList, () => {
      this.view.showRacingCountSection();
    });
  }

  startRace(racingCount) {
    this.model.updateRacingCount(racingCount);
    this.model.startRace((result) => {
      this.view.render(result);
    });
  }
}
