import { $ } from '../utils/dom.js';
import { ELEMENT_ID } from '../utils/constants.js';

import NameFormView from '../views/NameFormView.js';

export default {
  init() {
    new NameFormView($(ELEMENT_ID.carNamesForm))
      .init()
      .on('@submit', (e) => this.onSubmitCarNames(e.detail.input));
  },

  onSubmitCarNames(carNames) {
    console.log(carNames);
  },
};
