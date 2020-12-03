import Component from '../library/core/component.js';
import State from '../library/core/state.js';
import CarNamesInput from './car-names-input.js';
import RacingCountInput from './racing-count-input.js';

class CarGameContainer extends Component {
  #$racingCountContainer;
  _carNames;
  _racingCount;

  constructor($target, props) {
    super($target, props);
    this.initializeStates();
    this.initializeDOMElements();
    this.initializeComponents();
    this._carNames.subscribe(this.render);
  }

  initializeStates() {
    this._carNames = new State([]);
    this._racingCount = new State(0);
  }

  initializeDOMElements() {
    this.#$racingCountContainer = this._$target.querySelector(
      '.racing-count-container'
    );
  }

  initializeComponents() {
    const $carNamesContainer = this._$target.querySelector(
      '.car-names-container'
    );
    const $racingCountContainer = this._$target.querySelector(
      '.racing-count-container'
    );
    new CarNamesInput($carNamesContainer, { carNames: this._carNames });
    new RacingCountInput($racingCountContainer, {
      racingCount: this._racingCount,
      createCars: this.createCars,
    });
  }

  render = () => {
    if (this._carNames.value.length === 0) {
      this.#$racingCountContainer.classList.add('hidden');
    } else {
      this.#$racingCountContainer.classList.remove('hidden');
    }
  };
}

export default CarGameContainer;
