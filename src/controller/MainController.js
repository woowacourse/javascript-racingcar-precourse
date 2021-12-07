import { $ } from '../utils/dom.js';
import { ELEMENT_ID, EVENT_TYPE } from '../utils/constants.js';

import NameFormView from '../views/NameFormView.js';
import CountFormView from '../views/CountFormView.js';

import CarsModel from '../models/CarsModel.js';

export default {
  init() {
    new NameFormView($(ELEMENT_ID.carNamesForm))
      .init()
      .on(EVENT_TYPE.SUBMIT, (e) => this.onSubmitCarNames(e.detail.input));
    new CountFormView($(ELEMENT_ID.racingCountForm))
      .init()
      .on(EVENT_TYPE.SUBMIT, (e) => this.onSubmitRacingCounts(e.detail.input));
  },

  onSubmitCarNames(carNames) {
    CarsModel.setCars(carNames);
  },

  onSubmitRacingCounts(racingCount) {
    CarsModel.play(racingCount).then((result) => console.log(result));
  },
};
