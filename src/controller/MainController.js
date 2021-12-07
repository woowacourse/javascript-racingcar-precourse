import { $ } from '../utils/dom.js';

import NameFormView from '../views/NameFormView.js';

export default {
  init() {
    new NameFormView($('#car-names-form'))
      .init()
      .on('@submit', (e) => this.onSubmitCarNames(e.detail.input));
  },

  onSubmitCarNames(carNames) {
    console.log(carNames);
  },
};
