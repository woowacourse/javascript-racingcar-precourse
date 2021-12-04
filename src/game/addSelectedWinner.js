import { cars } from '../init/cars.js';

function getMaxCount() {
  return cars.reduce((acc, { count }) => {
    if (count > acc) {
      return count;
    }
    return acc;
  }, 0);
}

function selectWinner(maxCount) {
  const selectedWinner = cars.filter((car) => {
    if (car.count === maxCount) {
      return true;
    }
    return false;
  });
  return selectedWinner.map((winner) => winner.name).join(', ');
}

function makeWinnerString($resultScreenDiv, $winnerSpan) {
  $resultScreenDiv.insertAdjacentHTML('beforeend', '최종우승자: ');
  $resultScreenDiv.appendChild($winnerSpan);
}

export default function addSelectedWinner($resultScreenDiv) {
  const $winnerSpan = document.createElement('span');
  $winnerSpan.id = 'racing-winners';

  const maxCount = getMaxCount();
  const selectedWinner = selectWinner(maxCount);
  $winnerSpan.innerHTML = selectedWinner;

  makeWinnerString($resultScreenDiv, $winnerSpan);
}
