import { setCarNames, getRacingCount } from './user/actions.js';

export default function RacingCarGame() {
  const carNames = '';
  const racingCount = '';
  const carNamesSubmitBtn = document.getElementById('car-names-submit');
  const racingCountSubmitBtn = document.getElementById('racing-count-submit');

  carNamesSubmitBtn.addEventListener('click', () => {
    this.carNames = setCarNames();

    if (!this.carNames) {
      return;
    }

    document.getElementById('racing-count-container').hidden = false;
  });

  racingCountSubmitBtn.addEventListener('click', () => {
    this.racingCount = getRacingCount();

    if (!this.racingCount) {
      return;
    }

    // 게임 진행
    console.log(this.carNames, this.racingCount);

    document.getElementById('game-result-container').hidden = false;
  });
}

new RacingCarGame();
