import getCarNames from '../input/getCarNames.js';
import toggleRaceNumberInputScreen from '../init/toggleRaceNumberInputScreen.js';
import getRacingCount from '../input/getRacingCount.js';

export default function playGame(carList = '') {
  const $carNamesSubmit = document.querySelector('#car-names-submit');
  $carNamesSubmit.addEventListener('click', getCarNames);

  if (carList) {
    toggleRaceNumberInputScreen();
    getRacingCount();
  }
}
