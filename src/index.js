import { makeCars, validateNameInput } from './utils.js';

export default function RacingCarGame() {
  const carNamesInput = document.getElementById('car-names-input');
  const carNamesBtn = document.getElementById('car-names-submit');
  let cars;
  carNamesBtn.addEventListener('click', () => {
    if (validateNameInput(carNamesInput.value)) {
      cars = makeCars(carNamesInput);
    }
  });
}

new RacingCarGame();
