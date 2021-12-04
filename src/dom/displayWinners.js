import { ID_RACING_WINNERS, TEXT_WINNERS } from './const.js';
import { DIVIDER } from '../game/const.js';

function displayWinners(parent, winners) {
  const span = document.createElement('span');
  span.id = ID_RACING_WINNERS;
  span.innerText = `${TEXT_WINNERS}: ${winners.join(DIVIDER)}`;

  parent.appendChild(span);
}

export default displayWinners;
