import { insertText } from './dom.js';
import { gameLineTemplate, winnerTemplate } from './template.js';

const renderWinner = (winnerList) => {
  const winnerText = winnerTemplate(winnerList);

  insertText('app', winnerText);
};

const renderGame = (racingCars) => {
  const gameResultText =
    racingCars.map((car) => gameLineTemplate(car.getName(), car.getDistance())).join('') + '<br/>';

  insertText('app', gameResultText);
};

export { renderGame, renderWinner };
