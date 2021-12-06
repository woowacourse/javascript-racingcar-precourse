import { createElementWithId } from '../utils/utils.js';
import { GAME } from '../constants/gameRule.js';

export default function RacingResult(selector) {
  const title = document.getElementById('racing-result-title');
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
    winnerDiv.innerHTML += GAME.WINNER;

    const winnerSpan = createElementWithId('span', 'racing-winners', winnerDiv);
    winnerSpan.innerHTML += winner;
  };

  this.show = () => {
    title.classList.remove('hide');
  };

  this.hide = () => {
    title.classList.add('hide');
  };

  this.clear = () => {
    container.innerHTML = '';
  };
}
