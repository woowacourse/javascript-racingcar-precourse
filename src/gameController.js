import { getCarNamesInput, getRacingCountInput } from './user/userInput.js';

const $carNamesSubmit = document.querySelector('#car-names-submit');
const $racingCountSubmit = document.querySelector('#racing-count-submit');

function playGame(cars, racingCount) {
  console.log(cars, racingCount);
}

function getRacingCount(cars) {
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
  getCarNames();
}
