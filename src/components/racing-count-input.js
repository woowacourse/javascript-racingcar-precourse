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
    this._$target.addEventListener('click', event => this.onClick(event));
    this._$target.addEventListener('keyup', event => this.onKeyup(event));
  }

  onClick(event) {
    if (event.target.id === 'racing-count-submit') {
      this.setRacingCount();
    }
  }

  onKeyup(event) {
    if (event.key === 'Enter') {
      this.setRacingCount();
    }
  }

  setRacingCount() {
    const input = this.#$racingCountInput.value;

    this._props.racingCount.value = parseInt(input);
  }
}

export default RacingCountInput;
