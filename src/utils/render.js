import { insertText } from './dom.js';

const renderWinner = (winnerList) => {
  const winner = winnerList.join(', ');
  const winnerText = `최종 우승자: <span id="racing-winners">${winner}</span>`;

  insertText('#app', winnerText);
};

const renderGame = (racingCars) => {
  const gameResultText =
    racingCars
      .map((car) => `<div>${car.getName()}: ${'-'.repeat(car.getDistance())}</div>`)
      .join('') + '<br/>';

  insertText('#app', gameResultText);
};

export { renderGame, renderWinner };
