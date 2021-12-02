/* eslint-disable class-methods-use-this */

import View from '../view/View.js';
import Model from '../model/Model.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();

    this.view.initView();
    this.view.hideElement();
    this.view.preventPageRefresh();
    this.view.bindCreateCarList(this.createCarList.bind(this));
    this.view.bindStartRace(this.startRace.bind(this));
  }

  createCarList(nameList) {
    this.model.createCarList(nameList, () => {
      this.view.showRacingCountSection();
    });
  }

  startRace(racingCount) {
    this.model.setRacingCount(racingCount);
    this.model.startRace((raceResultList, winnerNameList) => {
      this.view.renderFinalWinnerSection({ raceResultList, winnerNameList });
    });
  }
}
