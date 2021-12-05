import RacingGameManager from './racingGameManager.js';

import {
  ID_APP,
  DICT_ACTION_BUTTON_SUBMIT,
  MSG_ERROR,
  KEY_FORM_CAR_NAMES,
  KEY_FORM_RACING_COUNT,
  BUTTON_SUBMIT_TEXT,
} from './dom/const.js';

import removeChildrenByTagName from './dom/utils/removeChildrenByTag.js';
import createFormManagerByKey from './dom/createFormManagerByKey.js';
import displayFormByKey from './dom/displayFormByKey.js';
import displayRacingCountHeading from './dom/displayRacingCountHeading.js';
import displayRacingResultHeading from './dom/displayRacingResultHeading.js';
import displayRaceStatus from './dom/displayRaceStatus.js';
import displayWinners from './dom/displayWinners.js';

export default class RacingGame {
  constructor() {
    this.app = document.getElementById(ID_APP);
    this.app.onclick = this.onClick.bind(this);
    this.init();

    this.carNamesForm = undefined;
    this.racingCountForm = undefined;

    this.displayCarNamesForm();

    this.racingGameManager = new RacingGameManager();
  }

  init() {
    removeChildrenByTagName(this.app, 'form');
    removeChildrenByTagName(this.app, 'h4');
  }

  displayCarNamesForm() {
    const isSucceededToDisplay = displayFormByKey(this.app, KEY_FORM_CAR_NAMES);
    if (isSucceededToDisplay) {
      this.carNamesForm = createFormManagerByKey(KEY_FORM_CAR_NAMES);
      this.carNamesForm.setButtonText(BUTTON_SUBMIT_TEXT);
    }
  }

  displayRacingCountForm() {
    const isSucceededToDisplay = displayFormByKey(
      this.app,
      KEY_FORM_RACING_COUNT
    );
    if (isSucceededToDisplay) {
      this.racingCountForm = createFormManagerByKey(KEY_FORM_RACING_COUNT);
      this.racingCountForm.setButtonText(BUTTON_SUBMIT_TEXT);
    }
  }

  displayGameStatus(racingCount) {
    for (let i = 0; i < racingCount; i++) {
      this.racingGameManager.race();
      displayRaceStatus(
        this.app,
        this.racingGameManager.getCurrentRaceStatus()
      );
    }
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
    displayRacingCountHeading(this.app);
    this.displayRacingCountForm();
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
    displayRacingResultHeading(this.app);
    this.displayGameStatus(this.racingGameManager.getRacingCount());
    this.racingGameManager.judgeWinners();
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
