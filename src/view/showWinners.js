const WINNER_SPAN_ID = 'racing-winners';
const WINNER_TITLE = '최종 우승자: ';

function getWinnerNames(winners) {
  return winners.map((winner) => winner.getName());
}

function showWinnerTitle($resultContainer) {
  const $title = document.createElement('span');

  $title.textContent = WINNER_TITLE;
  $resultContainer.append($title);
}

export default function showWinners(winners) {
  const $resultContainer = document.querySelector('#result-container');
  const $winnersSpan = document.createElement('span');
  const winnerNames = getWinnerNames(winners);
  $winnersSpan.id = WINNER_SPAN_ID;
  showWinnerTitle($resultContainer);

  $winnersSpan.textContent = `${winnerNames.join(', ')}`;
  $resultContainer.append($winnersSpan);
}
