import { cars } from '../init/cars.js';

function getMaxDistance() {
  return cars.reduce((acc, { distance }) => {
    return acc > distance ? acc : distance;
  }, 0);
}

function selectWinner() {
  const maxDistance = getMaxDistance();
  return cars.filter((car) => car.distance === maxDistance);
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
