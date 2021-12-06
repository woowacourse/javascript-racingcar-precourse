import { createElementWithId } from '../utils/utils.js';

export default function RacingResult(selector) {
  const container = createElementWithId('div', 'racing-result', selector);

  this.printProcess = (process) => {
    const processDiv = createElementWithId('div', 'racing-process', container);
    processDiv.innerHTML += process;
  };

  this.printWinner = (winner) => {
    const winnerDiv = createElementWithId(
      'div',
      'racing-result-winners',
      container
    );
    winnerDiv.innerHTML += '최종 우승자: ';

    const winnerSpan = createElementWithId('span', 'racing-winners', winnerDiv);
    winnerSpan.innerHTML += winner;
  };
}
