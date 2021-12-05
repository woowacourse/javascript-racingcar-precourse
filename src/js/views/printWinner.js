import $ from '../utils/dom.js';

const getWinner = carArr => {
  carArr = carArr.sort((a, b) => b.move - a.move);
  const winnerMove = carArr[0].move;
  const winners = [];
  carArr.forEach(car => {
    if (car.move === winnerMove) winners.push(car.name);
  });
  return winners;
};

const printWinner = carArr => {
  const winners = getWinner(carArr);

  const span = document.createElement('span');
  span.innerText = `${winners.join(', ')}`;
  span.setAttribute('id', 'racing-winners');
  $('#result-wrapper').appendChild(span);
};

export default printWinner;
