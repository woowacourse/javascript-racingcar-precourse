import { SEPARATOR, DISPLAY } from '../constants.js';

function makeResultElement(winnerArray) {
  const $racingWinners = document.createElement('span');
  $racingWinners.setAttribute('id', 'racing-winners');

  const winners = winnerArray.join(SEPARATOR);
  $racingWinners.appendChild(document.createTextNode(winners));

  return $racingWinners;
}

function showResultHeader() {
  const $resultHeader = document.getElementsByTagName('h4')[1];
  $resultHeader.style.display = DISPLAY.block;
}

export default function printResult(winnerArray) {
  showResultHeader();

  const $app = document.getElementById('app');
  $app.appendChild(makeResultElement(winnerArray));
}
