import { CARRACING } from './constants.js';
import checkCarName from './checkInput/checkCarName.js';
import checkCount from './checkInput/checkCount.js';

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
    // set visible
  }

  // function visibility true;
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
    this.setVisible(false);
  }

  setVisible(boo) {
    if (boo) {
      this.title.style.visibility = 'visible';
      return true;
    }
    this.title.style.visibility = 'hidden';
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
      this.getCount(this.count.input);
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
}
