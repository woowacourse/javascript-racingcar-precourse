import { CARRACING } from './constants.js';
import checkCarName from './checkInput/checkCarName.js';
import checkCount from './checkInput/checkCount.js';
import Car from './car.js';

class CarName {
  constructor() {
    this.input = document.querySelector('#car-names-input');
    this.submit = document.querySelector('#car-names-submit');
  }
}

class Count {
  constructor() {
    this.title = document.querySelector('#count-title');
    this.input = document.querySelector('#racing-count-input');
    this.submit = document.querySelector('#racing-count-submit');
    this.setVisible(false);
  }

  setVisible(boo) {
    if (boo) {
      this.title.style.visibility = 'visible';
      this.input.style.visibility = 'visible';
      this.submit.style.visibility = 'visible';
      return true;
    }
    this.title.style.visibility = 'hidden';
    this.input.style.visibility = 'hidden';
    this.submit.style.visibility = 'hidden';
  }
}

class Result {
  constructor() {
    this.title = document.querySelector('#result-title');
    this.div = document.querySelector('#result-div');
    this.setVisible(false);
  }

  setVisible(boo) {
    if (boo) {
      this.title.style.visibility = 'visible';
      this.div.style.visibility = 'visible';
      return true;
    }
    this.title.style.visibility = 'hidden';
    this.div.style.visibility = 'hidden';
  }
}

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
      this.oneRoundgame(i); // 1 game
    }
    this.getWinner();
  }

  oneRoundgame() {
    this.carList.forEach(car => car.play());
    const stepResult = this.carList.map(car => car.stepResult());
    this.renderstepResult(stepResult);
  }

  renderstepResult(stepResult) {
    const carResultDiv = document.createElement('p');

    for (let i = 0; i < this.carList.length; i += 1) {
      carResultDiv.innerHTML += `${stepResult[i]}<br>`;
    }
    this.result.div.appendChild(carResultDiv);
  }

  getWinner() {
    const stepList = this.carList.map(car => car.step);
    const maxStep = Math.max.apply(null, stepList);

    const winnerList = this.carList.filter(car => car.step === maxStep);
    const winnerNames = winnerList.map(winner => winner.name);
    console.log(winnerNames);
  }
}
