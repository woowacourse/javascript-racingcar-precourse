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
  }

  hideContents() {
    [this.$countTitle, this.$countForm, this.$resultTitle].forEach(e =>
      e.setAttribute('hidden', true)
    );
  }

  mounted() {
    new NameInput({
      $nameForm: this.$nameForm,
      setState: this.setState,
      showCountInput: this.showCountInput,
    });
  }

  showCountInput = () => {
    new CountInput({
      $countForm: this.$countForm,
      $countTitle: this.$countTitle,
      setState: this.setState,
      showResult: this.showResult,
    });
  };

  showResult = () => {
    new Result({
      $resultTitle: this.$resultTitle,
      state: this.state,
    });
  };
}

export default App;
