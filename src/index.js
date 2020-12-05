import checkCarName from './checkCarNameInput.js';
import { showCountInput } from './elementControl.js';

export default function RacingCarGame() {
  const carNameInput = document.querySelector('#car-names-input');
  const carNameSubmit = document.querySelector('#car-names-submit');

  carNameSubmit.addEventListener('click', () => this.afterInputCarName());
  carNameInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      this.afterInputCarName();
    }
  });
  carNameSubmit.setAttribute('disable', 'disable');

  this.afterInputCarName = () => {
    let carNameChecked = checkCarName(carNameInput.value);
    if (carNameChecked) {
      showCountInput();
    }
  };
}

new RacingCarGame();
