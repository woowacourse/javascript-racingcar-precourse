import { $ } from '../dom/dom.js';
import computeRacingGameWinner from './computeRacingGameWinner.js';

export default function drawRacingCarGameResult(carInstanceList) {
  const winner = computeRacingGameWinner(carInstanceList);
  const winnerContainer = document.createElement('span');
  winnerContainer.id = 'racing-winners';
  winnerContainer.innerText = `최종 우승자: ${winner}`;
  $('#app').appendChild(winnerContainer);
}
