import { SEPARATOR, WINNER_MESSAGE, DISPLAY } from '../constants.js';

function makeResultBlock() {
  const $result = document.createElement('div');
  $result.setAttribute('id', 'result');

  const $winnerMessage = document.createElement('span');
  $winnerMessage.appendChild(document.createTextNode(WINNER_MESSAGE));

  $result.appendChild($winnerMessage);

  return $result;
}

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

  const $result = makeResultBlock();
  $result.appendChild(makeResultElement(winnerArray));

  const $app = document.getElementById('app');
  $app.appendChild($result);
}
