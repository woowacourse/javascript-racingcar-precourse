import toggleRaceNumberInputScreen from '../init/toggleRaceNumberInputScreen.js';
import getRacingCount from '../input/getRacingCount.js';

export default function playGame(carList) {
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  $racingCountSubmit.addEventListener('click', () => getRacingCount(carList));
  toggleRaceNumberInputScreen();
}
