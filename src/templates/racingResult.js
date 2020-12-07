import { concatedWinners } from '../utils/index.js';

export const racingResult = winners => {
  if (winners.length === 1) {
    return racingResultContainer(`<div>최종 우승자: ${winners[0].name}</div>`);
  }

  return racingResultContainer(
    `<div>최종 우승자: ${concatedWinners(winners)}</div>`
  );
};

const racingResultContainer = children => {
  return `<div class="result">${children}</div>`;
};
