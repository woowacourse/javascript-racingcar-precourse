import { GAME_RULE } from './constants.js';

const gameLineTemplate = (carName, carDistance) => {
  return `<div>${carName}: ${GAME_RULE.CAR_DISTANCE_LOG.repeat(carDistance)}</div>`;
};

const winnerTemplate = (winnerList) => {
  const winner = winnerList.join(', ');

  return `최종 우승자: <span id="racing-winners">${winner}</span>`;
};

export { gameLineTemplate, winnerTemplate };
