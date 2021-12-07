import { $ } from '../utils/dom.js';
import { ELEMENT_ID } from '../utils/constants.js';

import NameFormView from '../views/NameFormView.js';
import CountFormView from '../views/CountFormView.js';

export default {
  init() {
    new NameFormView($(ELEMENT_ID.carNamesForm))
      .init()
      .on('@submit', (e) => this.onSubmitCarNames(e.detail.input));
    new CountFormView($(ELEMENT_ID.racingCountForm)).init();
  },

  onSubmitCarNames(carNames) {
    console.log(carNames);
  },
};
