import { getCarNamesInput, getRacingCountInput } from './user/userInput.js';
import moveCars from './computer/carsMovement.js';

const $carNamesSubmit = document.querySelector('#car-names-submit');
const $racingCountInput = document.querySelector('#racing-count-input');
const $racingCountSubmit = document.querySelector('#racing-count-submit');

function playGame(cars, racingCount) {
  moveCars(cars, racingCount);
}

function getRacingCount(cars) {
  $racingCountInput.readOnly = false;
  $racingCountSubmit.disabled = false;
  $racingCountSubmit.addEventListener('click', event => {
    event.preventDefault();
    const racingCount = getRacingCountInput();
    if (racingCount) {
      playGame(cars, racingCount);
    }
  });
}

function getCarNames() {
  $carNamesSubmit.addEventListener('click', event => {
    event.preventDefault();
    const cars = getCarNamesInput();
    if (cars) {
      getRacingCount(cars);
    }
  });
}

export default function prepareGame() {
  $racingCountInput.readOnly = true;
  $racingCountSubmit.disabled = true;
  getCarNames();
}
