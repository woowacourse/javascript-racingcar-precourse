import { CARRACING } from './constants.js';
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

function checkCarNameDuplicate(carNameList) {
  for (let name of carNameList) {
    let count = carNameList.filter(element => name === element).length;

    if (count >= 2) {
      return false;
    }
  }

  return true;
}

function checkCarNameLen(carNameList) {
  for (let name of carNameList) {
    if (name.length >= 6) {
      return false;
    }
  }

  return true;
}

function checkCarNameComma(carNameList) {
  if (carNameList.length === 1) {
    return false;
  }

  return true;
}

function checkCarName(carNameList) {
  if (
    checkCarNameDuplicate(carNameList) &&
    checkCarNameLen(carNameList) &&
    checkCarNameComma(carNameList)
  ) {
    return true;
  }

  return false;
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
  return count;
}

racingGame();
