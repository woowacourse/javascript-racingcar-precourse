import { SELECTOR } from '../constants/constant.js';
import { validateCount } from '../utils/validation.js';

export class RacingCount {
  constructor(setCount) {
    this.$countInput = document.getElementById(SELECTOR.ID.RACING_COUNT_INPUT);
    this.$countSubmitButton = document.getElementById(
      SELECTOR.ID.RACING_COUNT_SUBMIT
    );
    this.setCount = setCount;
    this.bindEvents();
  }

  bindEvents() {
    this.$countSubmitButton.addEventListener(
      'click',
      this.submitCount.bind(this)
    );
  }

  submitCount(event) {
    event.preventDefault();
    const count = this.$countInput.value;
    const error = validateCount(count);
    if (error) {
      return alert(error);
    }
    this.setCount(count);
  }
}
