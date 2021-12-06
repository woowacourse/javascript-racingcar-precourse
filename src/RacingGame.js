import { CARRACING } from './constants.js';
import { checkCarName, checkCount } from './validators/checkInput.js';
import Car from './car.js';
import { CarName, Count, Result } from './elementClass/elementClass.js';

export default class RacingGame {
  constructor() {
    this.carName = new CarName();
    this.count = new Count();
    this.result = new Result();
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
    this.getWinner();
  }

  oneRoundgame() {
    this.carList.forEach(car => car.play());
    const stepResult = this.carList.map(car => car.stepResult());
    this.renderstepResult(stepResult);
  }

  renderstepResult(stepResult) {
    const carResult = document.createElement('p');

    for (let i = 0; i < this.carList.length; i += 1) {
      carResult.innerHTML += `${stepResult[i]}<br>`;
    }
    this.result.div.appendChild(carResult);
  }

  getWinner() {
    const stepList = this.carList.map(car => car.step);
    const maxStep = Math.max.apply(null, stepList);

    const winnerList = this.carList.filter(car => car.step === maxStep);
    const winnerNames = winnerList.map(winner => winner.name);
    this.renderWinner(winnerNames);
  }

  renderWinner(winnerNames) {
    const winner = document.createElement('span');
    winner.setAttribute('id', 'racing-winners');
    winner.innerHTML = '최종 우승자: ';

    const winnerName = winnerNames.join(', ');
    winner.innerHTML += winnerName;
    this.result.div.appendChild(winner);
  }
}
