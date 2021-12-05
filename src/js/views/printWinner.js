import $ from '../utils/dom.js';

const printWinner = winners => {
  const span = document.createElement('span');
  span.innerText = `${winners.join(', ')}`;
  span.setAttribute('id', 'racing-winners');
  $('#result-winner').appendChild(span);
};

export default printWinner;
