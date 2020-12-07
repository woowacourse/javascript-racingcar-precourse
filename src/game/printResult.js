import race from './race.js';
import getWinner from './getWinner.js';

function raceResultTemplate(car) {
  return `${car.name}: ${'-'.repeat(car.count)}<br>`;
}

function printRaceResult(car) {
  const $resultScreen = document.querySelector('#app > div:last-child');

  $resultScreen.insertAdjacentHTML('beforeend', raceResultTemplate(car));
}

function resetResult($resultScreen, carList) {
  $resultScreen.innerHTML = '';
  carList.forEach((car) => (car.count = 0));
}

function printFinalResult(carList) {
  const winner = getWinner(carList);
  return winner.map((car) => car.name).join(', ');
}

export default function printResult(carList, racingCount) {
  const $resultScreen = document.querySelector('#app > div:last-child');

  resetResult($resultScreen, carList);
  $resultScreen.removeAttribute('hidden');
  while (racingCount--) {
    carList.forEach((car) => race(car));
    carList.forEach((car) => printRaceResult(car));
    $resultScreen.insertAdjacentHTML('beforeend', '<br>');
  }
  $resultScreen.insertAdjacentHTML(
    'beforeend',
    `최종우승자 : ${printFinalResult(carList)} <br>`,
  );
}
