import NameFormView from '../views/NameFormView.js';

export default {
  init() {
    new NameFormView(document.querySelector('#car-names-form'))
      .init()
      .on('@submit', (e) => this.onSubmitCarNames(e.detail.input));
  },

  onSubmitCarNames(carNames) {
    console.log(carNames);
  },
};
