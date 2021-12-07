import Component from '../core/Component.js';
import { parseRacingCount, isValidRacingCount } from '../utils/input.js';
import {
  $,
  disableForm,
  enableForm,
  hideElement,
  showElement,
} from '../utils/dom.js';
import { MESSAGE, GAME_STATUS } from '../utils/constants.js';

export default class RacingCountForm extends Component {
  initDoms() {
    this.container = $('#racing-count-form');
    this._title = $('#racing-count-title');
    this._input = $('#racing-count-input');
  }

  bindEvents() {
    this.appendRootEvent('submit', event => {
      event.preventDefault();
      const count = parseRacingCount(this._input.value);
      if (!isValidRacingCount(count)) {
        return alert(MESSAGE.INVALID_CAR_RACINGS);
      }
      this.props.onSubmit(count);
    });
  }

  renderByStatus(status) {
    const renderCases = {
      [GAME_STATUS.RACING_COUNT_REQUIRED]: () => {
        showElement(this.container);
        showElement(this._title);
        enableForm(this.container);
      },
      [GAME_STATUS.NAMES_REQUIRED]: () => {
        hideElement(this.container);
        hideElement(this._title);
      },
      [GAME_STATUS.END]: () => {
        disableForm(this.container);
      },
    };
    return renderCases[status]();
  }

  render() {
    const { gameStatus } = this.props;
    if (!gameStatus) {
      return this.renderByStatus(GAME_STATUS.NAMES_REQUIRED);
    }
    this.renderByStatus(gameStatus);
  }
}
