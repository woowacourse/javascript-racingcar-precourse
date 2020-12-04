import { ZERO_COUNT_MESSAGE } from '../library/constants/alert-maessage-racing-count.js';
import Component from '../library/core/component.js';

class RacingCountInput extends Component {
  #$racingCountInput;

  constructor($target, props) {
    super($target, props);
    this.initializeDOMElements();
  }

  initializeDOMElements() {
    this.#$racingCountInput = this._$target.querySelector(
      '#racing-count-input'
    );
  }

  initializeEventListener() {
    this._$target.addEventListener('click', event => {
      if (event.target.id === 'racing-count-submit') {
        this.setRacingCount();
      }
    });
    this._$target.addEventListener('keyup', event => {
      if (event.key === 'Enter') {
        this.setRacingCount();
      }
    });
  }

  setRacingCount() {
    const input = this.#$racingCountInput.value;
    if (input === '' || input === '0') {
      alert(ZERO_COUNT_MESSAGE);
      this.#$racingCountInput.value = '';
      this.#$racingCountInput.focus();
      return;
    }
    this._props.racingCount.value = parseInt(input);
    this._props.setGameData();
  }
}

export default RacingCountInput;
