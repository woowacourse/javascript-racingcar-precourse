import { cars } from '../init/cars.js';

function getMaxCount() {
  return cars.reduce((acc, { count }) => {
    return acc > count ? acc : count;
  }, 0);
}

function selectWinner() {
  const maxCount = getMaxCount();
  return cars.filter((car) => car.count === maxCount);
}

function makeWinnerString($resultScreenDiv, $winnerSpan) {
  $resultScreenDiv.insertAdjacentHTML('beforeend', '최종우승자: ');
  $resultScreenDiv.appendChild($winnerSpan);
}

export default function addSelectedWinner($resultScreenDiv) {
  const $winnerSpan = document.createElement('span');
  $winnerSpan.id = 'racing-winners';

  const selectedWinner = selectWinner()
    .map((winner) => winner.name)
    .join(', ');

  $winnerSpan.innerHTML = selectedWinner;
  makeWinnerString($resultScreenDiv, $winnerSpan);
}
