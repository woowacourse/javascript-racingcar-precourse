import $ from '../utils/dom.js';
import getWinner from '../models/getWinner.js';

const printWinner = carArr => {
  const winners = getWinner(carArr);

  const span = document.createElement('span');
  span.innerText = `${winners.join(', ')}`;
  span.setAttribute('id', 'racing-winners');
  $('#result-wrapper').appendChild(span);
};

export default printWinner;
