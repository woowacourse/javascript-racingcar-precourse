import { CARRACING } from './constants.js';
import checkCarName from './checkInput/checkCarName.js';
import checkCount from './checkInput/checkCount.js';

export default class RacingGame {
  constructor() {
    console.log('들어옴');
    this.carNameInput = document.getElementById('car-names-input');
    this.carNameSubmit = document.getElementById('car-names-submit');
    this.countInput = document.getElementById('racing-count-input');
    this.countSubmit = document.getElementById('racing-count-submit');
  }

  handler() {
    this.carNameSubmit.addEventListener('click', getCarName);
    this.countSubmit.addEventListener('click', getCount);
  }

  getCarName() {
    let carNameList = [];
    carNameList = carNameInput.value.split(',');
    if (!checkCarName(carNameList)) {
      alert(CARRACING.ALERT_WRONG_NAME);
      return false;
    }
    return carNameList;
  }

  getCount() {
    let count = 0;
    count = countInput.value;
    if (!checkCount(count)) {
      alert(CARRACING.ALERT_WRONG_NUM);
      return false;
    }

    return count;
  }
}
