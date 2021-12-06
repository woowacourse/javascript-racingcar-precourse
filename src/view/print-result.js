import { state } from '../index.js';
import {
  LINE_BREAK,
  POSITION_CONDITION_NUMBER,
} from '../constants/constants.js';
import { addRandomPosition, decideWinner } from '../utils/game-utils.js';

export const printGameResult = function (racingCount) {
  addRandomPosition(racingCount);
  const resultSpan = document.querySelector('#result-span');

  for (let i = 1; i <= racingCount; i++) {
    for (const car of state.carArray) {
      resultSpan.innerHTML += `${LINE_BREAK} ${car.name}: `;
      printPostions(car, i);
    }
    resultSpan.innerHTML += `${LINE_BREAK}`;
  }
};

const printPostions = function (car, round) {
  const resultSpan = document.querySelector('#result-span');

  for (let j = 0; j < round; j++) {
    if (car.position[j] >= POSITION_CONDITION_NUMBER) {
      resultSpan.innerHTML += '-';
    } else {
      resultSpan.innerHTML += '';
    }
  }
};

export const printFinalWinner = function () {
  decideWinner();
  const finalWinner = decideWinner().join(', ');
  const resultSpan = document.querySelector('#result-span');
  const racingWinners = document.querySelector('#racing-winners');
  resultSpan.innerHTML += `${LINE_BREAK}최종우승자: `;
  racingWinners.innerHTML += `${finalWinner}`;
};
