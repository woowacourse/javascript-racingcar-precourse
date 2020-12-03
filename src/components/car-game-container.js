import Car from '../library/classes/car.js';
import Component from '../library/core/component.js';
import State from '../library/core/state.js';
import CarNamesInput from './car-names-input.js';
import RacingCountInput from './racing-count-input.js';

class CarGameContainer extends Component {
  _cars;
  _racingCount;
  #$racingCountContainer;

  constructor($target, props) {
    super($target, props);
    this.initializeStates();
    this.initializeDOMElements();
    this.initializeComponents();
  }

  initializeStates() {
    this._cars = new State([]);
    this._racingCount = new State(0);
    this._cars.subscribe(this.render);
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
    new CarNamesInput($carNamesContainer, { createCars: this.createCars });
    new RacingCountInput($racingCountContainer, {
      racingCount: this._racingCount,
      setGameData: this.setGameData,
    });
  }

  createCars = carNames => {
    const cars = [];
    carNames.forEach(carName => cars.push(new Car(carName)));
    this._cars.value = cars;
  };

  setGameData = () => {
    this._props.gameData.value = {
      cars: this._cars.value,
      racingCount: this._racingCount.value,
    };
  };

  render = () => {
    if (this._cars.value.length === 0) {
      this.#$racingCountContainer.classList.add('hidden');
    } else {
      this.#$racingCountContainer.classList.remove('hidden');
    }
  };
}

export default CarGameContainer;
