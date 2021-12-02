import Component from '../core/Component.js';
import { $ } from '../utils/dom.js';
import { GAME_STATUS } from '../utils/constants.js';

export default class RacingCarGame extends Component {
  initDoms() {
    this.container = $('#car-names-form');
    this._input = $('#car-names-input', this.container);
  }

  initState() {
    this.state = {
      cars: [],
      racingCount: 0,
      gameStatus: GAME_STATUS.NAMES_REQUIRED,
    };
  }
}
