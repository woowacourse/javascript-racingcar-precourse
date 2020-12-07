import race from './race.js';
import getWinner from './getWinner.js';

function resetResult($resultScreen, carList) {
  $resultScreen.innerHTML = '';
  carList.forEach((car) => (car.count = 0));
}

function printRaceResult(carList, $resultScreen) {
  carList.forEach((car) => {
    $resultScreen.insertAdjacentHTML(
      'beforeend',
      `${car.name}: ${'-'.repeat(car.count)}<br>`,
    );
  });
  $resultScreen.insertAdjacentHTML('beforeend', '<br>');
}

function printFinalResult(winner, $resultScreen) {
  $resultScreen.insertAdjacentHTML('beforeend', `최종우승자 : ${winner} <br>`);
}

export default function printResult(carList, racingCount) {
  const $resultScreen = document.querySelector('#app > div:last-child');

  resetResult($resultScreen, carList);
  $resultScreen.removeAttribute('hidden');
  while (racingCount--) {
    race(carList);
    printRaceResult(carList, $resultScreen);
  }
  const winner = getWinner(carList);
  printFinalResult(winner, $resultScreen);
}
