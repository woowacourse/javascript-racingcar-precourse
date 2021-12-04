import { isValidCount } from '../utils/valid.js';

class CountInput {
  constructor($countInput) {
    this.$countInput = $countInput;
    this.selectDom();
    this.addEvent();
  }

  selectDom() {
    this.$countForm = this.$countInput.parentElement;
  }

  addEvent() {
    this.$countForm.addEventListener('submit', this.submitCount.bind(this));
  }

  submitCount(e) {
    e.preventDefault();

    const count = Number(this.$countInput.value);
    if (!isValidCount(count)) {
      return;
    }
  }
}

export default CountInput;
