import {
  displayElement,
  appendAtEnd,
  appendLineBreakAtEnd,
  requestInputAgain,
} from './util.js';
import {
  ALERT_MESSAGES,
  racingCountInputElement,
  gameResultHeader,
  WINNER_SEPARATOR,
} from './config.js';

export const handleRacingCount = (e) => {
  const racingCount = racingCountInputElement.value;
  const error = isErrorRacingCount(racingCount);
  let cars = e.currentTarget.cars;

  if (error) {
    return requestInputAgain(ALERT_MESSAGES[error], racingCountInputElement);
  }
  playGame(racingCount, cars);
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
  displayElement(`#${gameResultHeader.id}`, 'block');

  for (let i = 0; i < racingCount; i++) {
    cars.forEach((car) => car.playOneTurn());
    cars.forEach((car) => car.displayCurrentScore());
    appendLineBreakAtEnd('#game-result-content');
  }
  displayFinalWinner(cars);
  return cars;
};

const displayFinalWinner = (cars) => {
  let max;
  let winners = '';

  cars.sort((a, b) => b.scoreLen - a.scoreLen);
  max = cars[0].scoreLen;
  winners = cars.filter((car) => car.scoreLen === max).map((car) => car.name);

  appendAtEnd(
    '#game-result-content',
    'div',
    `🥇최종 우승자: ${winners.join(WINNER_SEPARATOR)}`
  );
};
