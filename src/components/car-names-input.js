import Component from '../library/core/component.js';

class CarNamesInput extends Component {
  #$carNamesInput;

  constructor($target, props) {
    super($target, props);
    this.initializeDOMElements();
    props.carNames.subscribe(this.render);
  }

  initializeDOMElements() {
    this.#$carNamesInput = this._$target.querySelector('#car-names-input');
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
    const input = this.#$carNamesInput.value;
    let carNames;
    if (!this.isValidateInput(input)) {
      this.alertByCase(input);
      this.#$carNamesInput.value = '';
      this.#$carNamesInput.focus();
      return;
    }
    carNames = input.split(',').map(carName => carName.trim());
    this._props.carNames.value = carNames;
  }

  isValidateInput(input) {
    const carNames = input.split(',').map(carName => carName.trim());
    if (input === '') {
      return false;
    }
    if (this.hasNameWithMoreThan5Letters(carNames)) {
      return false;
    }
    if (this.hasEmptyName(carNames)) {
      return false;
    }

    return true;
  }

  hasNameWithMoreThan5Letters(carNames) {
    for (const carName of carNames) {
      if (carName.length > 5) {
        return true;
      }
    }

    return false;
  }

  hasEmptyName(carNames) {
    for (const carName of carNames) {
      if (carName.length === 0) {
        return true;
      }
    }

    return false;
  }

  alertByCase(input) {
    const carNames = input.split(',').map(carName => carName.trim());
    let errorMessage = [];
    if (input === '') {
      errorMessage.push('공백');
    } else {
      if (this.hasNameWithMoreThan5Letters(carNames)) {
        errorMessage.push('5자가 넘는 이름');
      }
      if (this.hasEmptyName(carNames)) {
        errorMessage.push('공백인 이름');
      }
    }
    alert(`${errorMessage.join(', ')}을 입력하셨습니다. 다시 입력해주세요`);
  }
}

export default CarNamesInput;
