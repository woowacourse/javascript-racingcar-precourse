import checkCarName from './checkCarNameInput.js';

export default function RacingCarGame() {
  const carNameInput = document.querySelector('#car-names-input');
  const carNameSubmitBtn = document.querySelector('#car-names-submit');

  carNameSubmitBtn.addEventListener('click', () => checkCarName(carNameInput.value));
  carNameInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      checkCarName(carNameInput.value);
    }
  });
}

new RacingCarGame();
