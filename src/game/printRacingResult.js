import { cars } from '../init/cars.js';
import { showResultSrceen } from '../init/setScreen.js';

function makeRacingResult($resultScreenDiv) {
  cars.forEach((car) => {
    $resultScreenDiv.insertAdjacentHTML(
      'beforeend',
      `${car.name}: ${'-'.repeat(car.count)}<br>`,
    );
  });
  $resultScreenDiv.insertAdjacentHTML('beforeend', '<br>');
}

export default function printRacingResult($resultScreenDiv) {
  makeRacingResult($resultScreenDiv);
  showResultSrceen();
}
