import getCarNames from '../input/getCarNames.js';
import getRacingCount from '../input/getRacingCount.js';
import newgetCarNames from '../input/newgetCarNames.js';

export default function playGame() {
  // const carList = getCarNames();
  // const racingCount = getRacingCount();

  const carList = newgetCarNames();
  console.log(carList);
}
