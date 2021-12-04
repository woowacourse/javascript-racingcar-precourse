import { ID } from './constants/index.js';
import NameInput from './components/NameInput.js';
import CountInput from './components/CountInput.js';
import Result from './components/Result.js';
class App {
  constructor($target) {
    this.$target = $target;
    this.state = {
      names: [],
      count: 0,
    };
    this.render();
  }

  setState = newState => {
    this.state = { ...this.state, ...newState };
    console.log('현재상태', this.state);
  };

  render() {
    this.addTemplate();
    this.selectDom();
    this.hideContents();
    this.mounted();
  }

  addTemplate() {
    this.$target.insertAdjacentHTML(
      'beforeend',
      `<div id=${ID.RESULT_CONTAINER}></div>`
    );
  }

  selectDom() {
    [, , this.$nameForm, this.$countTitle, this.$countForm, this.$resultTitle] =
      this.$target.children;

    this.$nameInput = document.querySelector(`#${ID.CAR_NAMES_INPUT}`);
    this.$countInput = document.querySelector(`#${ID.RACING_COUNT_INPUT}`);
    this.$resultContainer = document.querySelector(`#${ID.RESULT_CONTAINER}`);
  }

  hideContents() {
    [this.$countTitle, this.$countForm, this.$resultTitle].forEach(e =>
      e.setAttribute('hidden', true)
    );
  }

  mounted() {
    new NameInput({
      $nameInput: this.$nameInput,
      setState: this.setState,
    });
    new CountInput({
      $countInput: this.$countInput,
      setState: this.setState,
      showResult: this.showResult,
    });
  }

  showResult = () => {
    new Result({
      $resultContainer: this.$resultContainer,
      state: this.state,
    });
  };
}

export default App;
