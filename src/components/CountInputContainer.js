import { USER_INPUT_ALERT } from '../libs/constant.js';

const InputCheckMethods = [
  (value) => {
    if (value === '' || Number(value) < 1 || parseInt(value) !== Number(value)) {
      alert(USER_INPUT_ALERT.notNaturalNumber);
      return false;
    }
    return true;
  },
];

class CountInputContainer {
  count;
  constructor() {
    this.$racingCountSubmitButton = document.querySelector('#racing-count-submit');
    this.$racingCountInput = document.querySelector('#racing-count-input');
    this.init();
  }
  init() {
    this.triggerCountInputEvent();
  }
  triggerCountInputEvent() {
    this.$racingCountSubmitButton.addEventListener('click', (e) => this.onCountSubmit(e));
  }
  onCountSubmit(e) {
    e.preventDefault();
    const count = this.$racingCountInput.value;
    if (this.isInputValid(count)) {
      return;
    }
    this.count = count;
  }

  isInputValid(value) {
    return InputCheckMethods.every((InputCheckMethod) => InputCheckMethod(value));
  }
}

export default CountInputContainer;
