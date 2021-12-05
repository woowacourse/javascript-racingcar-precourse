import $ from '../utils/dom.js';

const printWinner = winners => {
  const span = document.createElement('span');
  span.setAttribute('id', 'racing-winners');
  span.innerText = `${winners.join(', ')}`;

  $('#result-winner').appendChild(span);
};

export default printWinner;
