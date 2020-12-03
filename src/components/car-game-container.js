import Component from '../library/core/component.js';

class CarGameContainer extends Component {
  #$carNamesInput;
  #$carNamesSubmit;
  #$racingCountContainer;

  constructor($target, props) {
    super($target, props);
    this.initializeElements();
    this.initializeEventListener();
  }

  initializeElements() {
    this.#$carNamesInput = this._$target.querySelector('#car-names-input');
    this.#$carNamesSubmit = this._$target.querySelector('#car-names-submit');
    this.#$racingCountContainer = this._$target.querySelector(
      '.racing-count-container'
    );
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
    }
    carNames = input.split(',').map(carName => carName.trim());
    this.#$racingCountContainer.classList.remove('hidden');
    console.log(carNames);
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

export default CarGameContainer;
