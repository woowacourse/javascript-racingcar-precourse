import { clearInput } from '../utils/clearInput.js';
import { isValidNames } from '../utils/valid.js';

class NameInput {
  constructor($nameInput) {
    this.$nameInput = $nameInput;
    this.selectDom();
    this.addEvent();
  }

  selectDom() {
    this.$nameForm = this.$nameInput.parentElement;
  }
  addEvent() {
    this.$nameForm.addEventListener('submit', this.submitName.bind(this));
  }
  submitName(e) {
    e.preventDefault();

    const names = this.$nameInput.value.split(',');
    if (!isValidNames(names)) {
      clearInput(this.$nameInput);
      return;
    }
  }
}

export default NameInput;
