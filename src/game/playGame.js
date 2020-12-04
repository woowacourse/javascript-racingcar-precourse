import printResult from './printResult.js';
import getCarNames from '../input/getCarNames.js';
import getRacingCount from '../input/getRacingCount.js';
import toggleRaceNumberInputScreen from '../init/toggleRaceNumberInputScreen.js';

export default function playGame(carList = '', value = 0) {
  const $carNamesSubmit = document.querySelector('#car-names-submit');
  $carNamesSubmit.addEventListener('click', getCarNames);

  if (carList) {
    toggleRaceNumberInputScreen();
    getRacingCount(carList);
  }
  if (carList && value) {
    toggleRaceNumberInputScreen();
    printResult(carList, value);
  }
}
