import { CARRACING } from '../constants.js';
import { checkCarName, checkCount } from '../validators/checkInput.js';
import Car from './car.js';
import Render from './Render.js';
import { CarName, Count, Result } from '../elementClass/elementClass.js';

export default class RacingGame {
  constructor() {
    this.carName = new CarName();
    this.count = new Count();
    this.result = new Result();
    this.render = new Render();
    this.carNameList = [];
    this.countNum = 0;
    this.initCarName();
  }

  initCarName() {
    this.carName.submit.addEventListener('click', e => {
      e.preventDefault();
      if (this.getCarName(this.carName.input)) {
        this.initCount();
      }
    });
  }

  initCount() {
    this.count.setVisible(true);
    this.count.submit.addEventListener('click', e => {
      e.preventDefault();
      if (this.getCount(this.count.input)) {
        this.play();
      }
    });
  }

  getCarName(input) {
    this.carNameList = input.value.split(',');

    if (!checkCarName(this.carNameList)) {
      alert(CARRACING.ALERT_WRONG_NAME);
      return false;
    }

    return this.carNameList;
  }

  getCount(input) {
    this.countNum = input.value;

    if (!checkCount(this.countNum)) {
      alert(CARRACING.ALERT_WRONG_NUM);
      return false;
    }

    return this.countNum;
  }

  play() {
    this.carList = this.carNameList.map(name => new Car(name));

    this.result.setVisible(true);

    for (let i = 0; i < this.countNum; i += 1) {
      this.oneRoundgame(i);
    }
    this.render.getWinner(this.carList);
  }

  oneRoundgame() {
    this.carList.forEach(car => car.play());
    const stepResultList = this.carList.map(car => car.stepResult());
    this.render.stepResult(stepResultList);
  }
}
