import Component from '../core/Component.js';
import { $ } from '../utils/dom.js';
import { GAME_STATUS } from '../utils/constants.js';
import { printCarResult } from '../utils/game.js';

export default class GameResult extends Component {
  initDoms() {
    this.container = $('#game-result');
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
    if (this.props.gameStatus !== GAME_STATUS.END) return;
    this.container.innerHTML = this._printResult();
  }
}
