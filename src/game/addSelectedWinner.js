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

function makeWinnerString($resultScreenDiv, selectedWinner) {
  const $winnerSpan = document.createElement('span');
  $winnerSpan.id = 'racing-winners';
  $winnerSpan.innerHTML = `최종우승자: ${selectedWinner}`;
  $resultScreenDiv.appendChild($winnerSpan);
}

export default function addSelectedWinner($resultScreenDiv) {
  const maxCount = getMaxCount();
  const selectedWinner = selectWinner(maxCount);

  makeWinnerString($resultScreenDiv, selectedWinner);
}
