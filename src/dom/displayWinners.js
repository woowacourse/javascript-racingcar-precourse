import { ID_RACING_WINNERS, TEXT_WINNERS } from './const.js';
import { DIVIDER } from '../game/const.js';

function displayWinners(parent, winners) {
  const div = document.createElement('div');
  const text = document.createTextNode(`${TEXT_WINNERS}: `);
  const span = document.createElement('span');
  span.id = ID_RACING_WINNERS;
  span.innerText = winners.join(DIVIDER);

  div.append(text);
  div.append(span);
  parent.appendChild(div);
}

export default displayWinners;
