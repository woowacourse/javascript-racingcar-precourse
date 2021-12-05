import RacingGameManager from './racingGameManager.js';
import FormManager from './dom/formManager.js';
import HeadingManager from './dom/headingManager.js';

import {
  ID_APP,
  DICT_ACTION_BUTTON_SUBMIT,
  MSG_ERROR,
  KEY_FORM_CAR_NAMES,
  KEY_FORM_RACING_COUNT,
  ID_HEADING_RACING_COUNT,
  ID_HEADING_RACING_RESULT,
} from './dom/const.js';

import displayRaceStatusList from './dom/displayRaceStatusList.js';
import displayWinners from './dom/displayWinners.js';

export default class RacingGame {
  constructor() {
    this.app = document.getElementById(ID_APP);
    this.app.onclick = this.onClick.bind(this);

    this.racingCountHeading = new HeadingManager(ID_HEADING_RACING_COUNT);
    this.racingCountHeading.setVisibility(false);
    this.racingResultHeading = new HeadingManager(ID_HEADING_RACING_RESULT);
    this.racingResultHeading.setVisibility(false);

    this.carNamesForm = FormManager.createFormManagerByKey(KEY_FORM_CAR_NAMES);
    this.carNamesForm.setVisibility(true);
    this.racingCountForm = FormManager.createFormManagerByKey(
      KEY_FORM_RACING_COUNT
    );
    this.racingCountForm.setVisibility(false);

    this.racingGameManager = new RacingGameManager();
  }

  [DICT_ACTION_BUTTON_SUBMIT[KEY_FORM_CAR_NAMES]](e) {
    e.preventDefault();

    const input = this.carNamesForm.getInputValue();

    if (!RacingGameManager.isValidCarNamesInput(input)) {
      alert(MSG_ERROR);
      this.carNamesForm.initInputValue();
      return;
    }

    this.racingGameManager.setCarsByInput(input);

    this.racingCountHeading.setVisibility(true);
    this.racingCountForm.setVisibility(true);
  }

  [DICT_ACTION_BUTTON_SUBMIT[KEY_FORM_RACING_COUNT]](e) {
    e.preventDefault();

    const input = this.racingCountForm.getInputValue();

    if (!RacingGameManager.isValidRacingCountInput(input)) {
      alert(MSG_ERROR);
      this.racingCountForm.initInputValue();
      return;
    }

    this.racingGameManager.setRacingCountByInput(input);
    this.racingGameManager.play(this.racingGameManager.getRacingCount());

    this.racingResultHeading.setVisibility(true);
    displayRaceStatusList(this.app, this.racingGameManager.getRaceStatusList());
    displayWinners(this.app, this.racingGameManager.getWinners());
  }

  onClick(event) {
    const { action } = event.target.dataset;

    if (action) {
      this[action](event);
    }
  }
}

new RacingGame();
