import { ID } from '../constants/index.js';
import { clearInput } from '../utils/clearInput.js';
import { isValidNames } from '../utils/valid.js';

class NameInput {
  constructor({ $nameForm, setState, showCountInput }) {
    this.$nameForm = $nameForm;
    this.setState = setState;
    this.showCountInput = showCountInput;

    this.selectDom();
    this.addEvent();
  }

  selectDom() {
    this.$nameInput = document.querySelector(`#${ID.CAR_NAMES_INPUT}`);
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
    this.showCountInput();
  }
}

export default NameInput;
