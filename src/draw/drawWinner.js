import ComputeWinner from '../compute/computeWinner.js';
import { $ } from '../dom/dom.js';

export default function DrawWinner(carList) {
  let winners = ComputeWinner(carList);
  let winnerString = winners.join(',');
  const winner = document.createElement('p');
  winner.innerHTML=`최종우승자 : ${winnerString}`;
  $('#racing-result-container').append(winner);
}