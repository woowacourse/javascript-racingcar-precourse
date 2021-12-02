import Component from '../core/Component.js';
import { $ } from '../utils/dom.js';
import { MESSAGE } from '../utils/constants.js';
import { parseCarNames, isValidCarNames } from '../utils/input.js';

export default class CarNamesForm extends Component {
  initDoms() {
    this.container = $('#car-names-form');
    this._input = $('#car-names-input', this.container);
  }

  bindEvents() {
    this.appendRootEvent('submit', event => {
      event.preventDefault();
      const names = parseCarNames(this._input.value);
      if (!isValidCarNames(names)) {
        return alert(MESSAGE.INVALID_CAR_NAMES);
      }
      this.props.onSubmit(names);
    });
  }

  render() {}
}
