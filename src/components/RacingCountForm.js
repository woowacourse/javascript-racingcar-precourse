import Component from '../core/Component.js';
import { parseRacingCount, isValidRacingCount } from '../utils/input.js';
import { $, disableInput, enableInput, focusInput } from '../utils/dom.js';
import { MESSAGE, GAME_STATUS } from '../utils/constants.js';

export default class RacingCountForm extends Component {
  init() {
    this.container = $('#racing-count-form');
    this._input = $('#racing-count-input');
  }

  render() {
    const { gameStatus } = this.props;
    if (gameStatus === GAME_STATUS.RACING_COUNT_REQUIRED) {
      enableInput(this._input);
      focusInput(this._input);
      return;
    }
    disableInput(this._input);
  }
}
