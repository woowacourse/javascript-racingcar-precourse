import { setCarNames } from './user/actions.js';

export default function RacingCarGame() {
  const carNames = '';
  const carNamesSubmitBtn = document.getElementById('car-names-submit');

  carNamesSubmitBtn.addEventListener('click', () => {
    this.carNames = setCarNames();

    if (!this.carNames) {
      return;
    }

    document.getElementById('racing-count-container').hidden = false;
  });
}

new RacingCarGame();
