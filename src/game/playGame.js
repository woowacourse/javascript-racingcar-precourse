import printResult from './printResult.js';
import getRacingCount from '../input/getRacingCount.js';
import toggleRaceNumberInputScreen from '../init/toggleRaceNumberInputScreen.js';

export default function playGame(carList = '', value = 0) {
  if (carList) {
    toggleRaceNumberInputScreen();
    getRacingCount(carList);
  }
  if (carList && value) {
    toggleRaceNumberInputScreen();
    printResult(carList, value);
  }
}
