import { makeCars, removeResult, startRace, validateNameInput } from './utils.js';

export default function RacingCarGame() {
  const carNamesInput = document.getElementById('car-names-input');
  const carNamesBtn = document.getElementById('car-names-submit');
  const racingCountInput = document.getElementById('racing-count-input');
  const racingCountBtn = document.getElementById('racing-count-submit');

  let cars;
  carNamesBtn.addEventListener('click', () => {
    removeResult();
    if (validateNameInput(carNamesInput.value)) {
      cars = makeCars(carNamesInput);
    }
  });

  racingCountBtn.addEventListener('click', () => {
    startRace(cars, racingCountInput.value);
  });
}

new RacingCarGame();
