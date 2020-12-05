import checkCarName from './checkCarNameInput.js';
import { showCountInput } from './elementControl.js';

export default function RacingCarGame() {
  const carNameInput = document.querySelector('#car-names-input');
  const carNameSubmit = document.querySelector('#car-names-submit');
  const racingCountInput = document.querySelector('#racing-count-input');
  const racingCountSubmit = document.querySelector('#racing-count-submit');
  let carNames = [];
  let countValue = 0;

  carNameSubmit.addEventListener('click', () => this.afterInputCarName());
  carNameInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      this.afterInputCarName();
    }
  });
  racingCountSubmit.addEventListener('click', () => this.afterInputCount());
  racingCountInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      this.afterInputCount();
    }
  });

  this.afterInputCarName = () => {
    const carNameChecked = checkCarName(carNameInput.value);
    if (carNameChecked) {
      showCountInput();
      carNames = carNames.concat(carNameChecked);
      racingCountInput.focus();
    } else {
      carNameInput.value = '';
      carNameInput.focus();
    }
  };

  this.afterInputCount = () => {
    console.log(racingCountInput.value);
  };
}

new RacingCarGame();
