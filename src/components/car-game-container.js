import Component from '../library/core/component.js';

class CarGameContainer extends Component {
  $carNamesInput;
  $carNamesSubmit;

  constructor($target, props) {
    super($target, props);
    this.initializeElements();
    this.initializeEventListener();
  }

  initializeElements() {
    this.$carNamesInput = this._$target.querySelector('#car-names-input');
    this.$carNamesSubmit = this._$target.querySelector('#car-names-submit');
  }

  initializeEventListener() {
    this._$target.addEventListener('click', event => this.onClick(event));
    this._$target.addEventListener('keyup', event => this.onKeyup(event));
  }

  onClick(event) {
    if (event.target.id === 'car-names-submit') {
      this.setCarNames();
    }
  }

  onKeyup(event) {
    if (event.key === 'Enter') {
      this.setCarNames();
    }
  }

  setCarNames() {
    const input = this.$carNamesInput.value;
    const carNames = input.split(',').map(carName => carName.trim());
    console.log(carNames);
  }
}

export default CarGameContainer;
