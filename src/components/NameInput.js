import { clearInput } from '../utils/clearInput.js';
import { isValidNames } from '../utils/valid.js';

class NameInput {
  constructor({ $nameInput, setState }) {
    this.$nameInput = $nameInput;
    this.setState = setState;

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

    this.setState({ names });
  }
}

export default NameInput;
