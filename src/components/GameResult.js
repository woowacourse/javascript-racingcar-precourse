import Component from '../core/Component.js';
import { $, createElement } from '../utils/dom.js';
import { GAME_STATUS } from '../utils/constants.js';
import { printCarResult } from '../utils/game.js';

export default class GameResult extends Component {
  initDoms() {
    this.container = $('#game-result');
    this._winnerElem = createElement('racing-winners', '', 'span');
  }

  _printResult() {
    const { gameResult } = this.props;
    const contents = gameResult
      .map(result => {
        return printCarResult(result);
      })
      .join('<br/>');

    return contents;
  }

  render() {
    const { gameStatus, winners } = this.props;
    if (gameStatus !== GAME_STATUS.END) return;
    this.container.innerHTML = `${this._printResult()} <br/> 최종 우승자:`;
    this._winnerElem.innerHTML = winners.join(',');
    this.container.appendChild(this._winnerElem);
  }
}
