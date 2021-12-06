import { $ } from './dom.js';

const renderWinner = (winnerList) => {
  const winner = winnerList.join(', ');
  const winnerText = `최종 우승자: <span id="racing-winners">${winner}</span>`;

  $('#racing-result-heading').insertAdjacentHTML('beforeend', winnerText);
};

const render = (racingCars) => {
  const racingResultText =
    racingCars
      .map((car) => `<div>${car.getName()}: ${'-'.repeat(car.getDistance())}</div>`)
      .join('') + '<br/>';
  $('#racing-result-heading').insertAdjacentHTML('beforeend', racingResultText);
};

export { render, renderWinner };
