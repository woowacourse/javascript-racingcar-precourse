import ComputeWinner from '../compute/computeWinner.js';
import { $ } from '../dom/dom.js';

export default function DrawWinner(carList) {
  let winners = ComputeWinner(carList);
  let winnerString = winners.join(',');
  const winnerTitle = document.createElement('span');
  winnerTitle.innerHTML = '최종 우승자 : ';
  const winner = document.createElement('span');
  winner.id = "racing-winners";
  winner.innerHTML=`${winnerString}`;
  $('#racing-result-container').append(winnerTitle);
  $('#racing-result-container').append(winner);
}