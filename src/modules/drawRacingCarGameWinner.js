import { $ } from '../dom/dom.js';
import computeRacingGameWinner from './computeRacingGameWinner.js';

export default function drawRacingCarGameWinner(carInstanceList) {
  const winner = computeRacingGameWinner(carInstanceList);
  const winnerContainer = document.createElement('div');
  winnerContainer.innerText = `최종 우승자: `;

  const winnerContent = document.createElement('span');
  winnerContent.id = 'racing-winners';
  winnerContent.innerText = `${winner}`;
  winnerContainer.appendChild(winnerContent);
  $('#app').appendChild(winnerContainer);
}
