import { CARRACING } from './constants.js';
import checkCarName from './checkInput/checkCarName.js';
import checkCount from './checkInput/checkCount.js';
const carNameInput = document.getElementById('car-names-input');
const carNameSubmit = document.getElementById('car-names-submit');
const countInput = document.getElementById('racing-count-input');
const countSubmit = document.getElementById('racing-count-submit');

export default function racingGame() {
  carNameSubmit.addEventListener('click', getCarName);
  countSubmit.addEventListener('click', getCount);
}

function Car(name) {
  this.name = name;
}

function getCarName() {
  let carNameList = [];
  carNameList = carNameInput.value.split(',');
  if (!checkCarName(carNameList)) {
    alert(CARRACING.ALERT_WRONG_NAME);
    return false;
  }
  return carNameList;
}

function getCount() {
  let count = 0;
  count = countInput.value;
  if (!checkCount(count)) {
    alert(CARRACING.ALERT_WRONG_NUM);
    return false;
  }

  return count;
}

racingGame();
