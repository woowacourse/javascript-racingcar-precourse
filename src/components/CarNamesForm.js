import Component from '../core/Component.js';
import { $, disableForm, enableForm } from '../utils/dom.js';
import { GAME_STATUS, MESSAGE } from '../utils/constants.js';
import { parseCarNames, isValidCarNames } from '../utils/input.js';

export default class CarNamesForm extends Component {
  initDoms() {
    this.container = $('#car-names-form');
    this.inputElement = $('#car-names-input', this.container);
  }

  bindEvents() {
    this.appendRootEvent('submit', event => {
      event.preventDefault();
      const names = parseCarNames(this.inputElement.value);
      if (!isValidCarNames(names)) {
        return alert(MESSAGE.INVALID_CAR_NAMES);
      }
      this.props.onSubmit(names);
    });
  }

  render() {
    const { gameStatus } = this.props;
    if (
      gameStatus === GAME_STATUS.RACING_COUNT_REQUIRED ||
      gameStatus === GAME_STATUS.END
    ) {
      return disableForm(this.container);
    }
    enableForm(this.container);
  }
}
