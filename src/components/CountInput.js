import { ID } from '../constants/index.js';
import { clearInput } from '../utils/clearInput.js';
import { isValidCount } from '../utils/valid.js';

class CountInput {
  constructor({ $countForm, $countTitle, setState, showResult }) {
    this.$countForm = $countForm;
    this.$countTitle = $countTitle;
    this.setState = setState;
    this.showResult = showResult;

    this.showContents();
    this.selectDom();
    this.addEvent();
  }

  showContents() {
    [this.$countForm, this.$countTitle].forEach(e =>
      e.removeAttribute('hidden')
    );
  }

  selectDom() {
    this.$countInput = document.querySelector(`#${ID.RACING_COUNT_INPUT}`);
  }

  addEvent() {
    this.$countForm.addEventListener('submit', this.submitCount.bind(this));
  }

  submitCount(e) {
    e.preventDefault();

    const count = Number(this.$countInput.value);
    if (!isValidCount(count)) {
      clearInput(this.$countInput);
      return;
    }

    this.setState({ count });
    this.showResult();
  }
}

export default CountInput;
