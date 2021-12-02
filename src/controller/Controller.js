/* eslint-disable class-methods-use-this */

import View from '../view/View.js';
import Car from '../model/Car.js';

export default class Controller {
  constructor() {
    this.view = new View();

    this.carList = [];
    this.racingCount = 0;

    this.view.initView();
    this.view.hideElement();
    this.view.preventPageRefresh();
    this.view.bindCreateCarList(this.createCarList.bind(this));
    this.view.bindStartRace(this.startRace.bind(this));
  }

  createCarList(nameList) {
    this.carList = nameList.map((name) => new Car(name));

    this.view.showRacingCountSection();
  }

  startRace(racingCount) {
    this.racingCount = racingCount;
    this.carList.forEach((car) => car.init());

    const raceResultList = [];

    for (let idx = 0; idx < this.racingCount; idx += 1) {
      const raceResult = this.carList.map((car) => car.race());

      raceResultList.push(raceResult);
    }

    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    const winnerNameList = this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);

    this.view.renderFinalWinnerSection({ raceResultList, winnerNameList });
  }
}
