import View from '../view/View.js';
import Model from '../model/Model.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();

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
