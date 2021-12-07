import Component from '../core/Component.js';
import { $, createElement } from '../utils/dom.js';
import { GAME_STATUS } from '../utils/constants.js';
import { printCarGameResult } from '../utils/game.js';

export default class GameResult extends Component {
  initDoms() {
    this.container = $('#game-result');
    this.winnerElement = createElement('racing-winners', '', 'span');
  }

  render() {
    const { gameStatus, gameResult, winners } = this.props;
    if (gameStatus !== GAME_STATUS.END) return;
    this.container.innerHTML = printCarGameResult(gameResult);
    this.winnerElement.innerHTML = winners.join(',');
    this.container.appendChild(this.winnerElement);
  }
}
