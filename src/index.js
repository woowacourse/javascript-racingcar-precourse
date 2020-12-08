import {Game} from './game.js';
import {hasBlanks, isUnderFiveCharacters} from './validation.js';
import {Car} from './car.js';

const firstButton = document.getElementById('#car-names-submit');
const secondButton = document.getElementById('#racing-count-submit');
const game = new Game();

firstButton.addEventListener('click', separateCarNames);
secondButton.addEventListener('click', tryGameNTimes);

function showNumTry() {
  document.getElementById('numTry').style.display = 'block';
}

function separateCarNames() {
  const carNames = document.getElementById('#car-names-input').value;
  const arrCarNames = carNames.split(',');
  for (let i = 0; i < arrCarNames.length; i += 1) {
    game.instanceOfCars[i] = new Car(arrCarNames[i]);
  }
  if ((isUnderFiveCharacters(game.instanceOfCars) === true) && (hasBlanks(game.instanceOfCars) === false)) {
    showNumTry();
  }
}

function showResultText() {
  document.getElementById('resultText').style.display = 'block';
}

function tryGameNTimes() {
  showResultText();
  document.getElementById('result').innerHTML = '';
  const numTry = document.getElementById('#racing-count-input').value;
  game.goForward(numTry);
  game.findWinner(game.forward);
}
