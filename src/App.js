import { ID } from './constants/index.js';
import NameInput from './components/NameInput.js';
import CountInput from './components/CountInput.js';

class App {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.mounted();
  }

  addTemplate() {
    this.$target.insertAdjacentHTML(
      'beforeend',
      `<div id=${ID.RESULT_CONTAINER}></div>`
    );
  }

  selectDom() {
    this.$nameInput = document.querySelector(`#${ID.CAR_NAMES_INPUT}`);
    this.$countInput = document.querySelector(`#${ID.RACING_COUNT_INPUT}`);
    this.$resultContainer = document.querySelector(`#${ID.RESULT_CONTAINER}`);
  }

  mounted() {
    new NameInput(this.$nameInput);
    new CountInput(this.$countInput);
  }
}

export default App;
