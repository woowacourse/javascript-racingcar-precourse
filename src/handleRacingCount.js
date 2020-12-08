import { hideGameResult } from './index.js';
import {
  displayElement,
  appendAtEnd,
  appendLineBreakAtEnd,
  requestInputAgain,
  initNode,
} from './util.js';
import { ALERT_MESSAGES, WINNER_SEPARATOR } from './config.js';

export const handleRacingCount = (e) => {
  const racingCountInput = document.querySelectorAll('#app input')[1];
  const racingCount = racingCountInput.value;
  const error = isErrorRacingCount(racingCount);
  let cars = e.currentTarget.cars;

  clearPreviousGameResult(cars);
  if (error) {
    alert(ALERT_MESSAGES[error]);
    requestInputAgain(racingCountInput);
    return;
  }
  displayElement('#game-result-header', 'block');
  displayElement('#game-result-content', 'block');
  playGame(racingCount, cars);
};

const clearPreviousGameResult = (cars) => {
  const gameResultContent = document.getElementById('game-result-content');

  initNode(gameResultContent);
  hideGameResult();
  cars.forEach((car) => car.initScore());
};

const isErrorRacingCount = (count) => {
  if (count === '') {
    return 'countEmpty';
  }
  if (!Number.isInteger(+count)) {
    return 'countNotInteger';
  }
  if (+count <= 0) {
    return 'countTooSmall';
  }
  return false;
};

const playGame = (racingCount, cars) => {
  for (let i = 0; i < racingCount; i++) {
    cars.forEach((car) => car.playOneTurn());
    cars.forEach((car) => car.displayCurrentScore());
    appendLineBreakAtEnd('#game-result-content');
  }
  displayFinalWinner(cars);
};

const displayFinalWinner = (cars) => {
  let winners = findWinners(cars.slice());

  appendAtEnd('#game-result-content', 'div', getGameResultStr(winners));
};

const findWinners = (cars) => {
  let maxScore;

  cars.sort((a, b) => b.scoreLen() - a.scoreLen());
  maxScore = cars[0].scoreLen();
  return cars
    .filter((car) => car.scoreLen() === maxScore)
    .map((car) => car.name);
};

const getGameResultStr = (winners) => {
  return `🥇최종 우승자: ${winners.join(WINNER_SEPARATOR)}`;
};
