import Car from './Car.js';
import { validateNameInput } from './utils.js';

export default function RacingCarGame() {
  const carNamesInput = document.getElementById('car-names-input');
  const carNamesBtn = document.getElementById('car-names-submit');
  carNamesBtn.addEventListener('click', () => {
    validateNameInput(carNamesInput.value);
  });
}

new RacingCarGame();
