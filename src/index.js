import {goForward, findWinner, forward, instanceOfCars} from './game.js';
import {hasBlanks, isUnderFiveCharacters} from './validation.js';
import {Car} from './car.js';

let firstButton = document.getElementById('#car-names-submit');
let secondButton = document.getElementById('#racing-count-submit');

firstButton.addEventListener('click', separateCarNames);
secondButton.addEventListener('click', tryGameNTimes);

function showNumTry() {
  document.getElementById('numTry').style.display = 'block';
}

function separateCarNames() {
  let carNames = document.getElementById('#car-names-input').value;
  let arrCarNames = carNames.split(',');
  for (let i = 0; i < arrCarNames.length; i += 1) {
    instanceOfCars[i] = new Car(arrCarNames[i]);
  }
  if ((isUnderFiveCharacters(instanceOfCars) === true) && (hasBlanks(instanceOfCars) === false)) {
    showNumTry();
  }
}

function showResultText() {
  document.getElementById('resultText').style.display = 'block';
}

function tryGameNTimes() {
  showResultText();
  document.getElementById('result').innerHTML = '';
  let numTry = document.getElementById('#racing-count-input').value;
  goForward(numTry);
  findWinner(forward);
}
