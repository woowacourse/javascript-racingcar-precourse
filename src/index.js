import {
  ID_APP,
  DICT_ACTION_BUTTON_SUBMIT,
  MSG_ERROR,
  KEY_FORM_CAR_NAMES,
  KEY_FORM_RACING_COUNT,
  BUTTON_SUBMIT_TEXT,
} from './dom/const.js';
import Car from './car.js';
import removeChildrenByTagName from './dom/utils/removeChildrenByTag.js';
import createFormManagerByKey from './dom/createFormManagerByKey.js';
import isValidCarNamesInput from './game/utils/isValidCarNamesInput.js';
import isValidRacingCountInput from './game/utils/isValidRacingCountInput.js';
import race from './game/race.js';
import toCarNameList from './game/utils/toCarNameList.js';
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

    this.cars = [];
    this.racingCount = 0;
  }

  init() {
    removeChildrenByTagName(this.app, 'form');
    removeChildrenByTagName(this.app, 'h4');
  }

  displayCarNamesForm() {
    if (displayFormByKey(this.app, KEY_FORM_CAR_NAMES)) {
      this.carNamesForm = createFormManagerByKey(KEY_FORM_CAR_NAMES);
      this.carNamesForm.setButtonText(BUTTON_SUBMIT_TEXT);
    }
  }

  displayRacingCountForm() {
    if (displayFormByKey(this.app, KEY_FORM_RACING_COUNT)) {
      this.racingCountForm = createFormManagerByKey(KEY_FORM_RACING_COUNT);
      this.racingCountForm.setButtonText(BUTTON_SUBMIT_TEXT);
    }
  }

  setCarsByInput(input) {
    this.cars = Car.generateCarsByNames(toCarNameList(input));
  }

  setRacingCountByinput(input) {
    this.racingCount = Number(input);
  }

  getWinners() {
    const maxPosition = Car.getMaxPosition(this.cars);
    return Car.getCarsByPosition(this.cars, maxPosition).map((car) =>
      car.getName()
    );
  }

  [DICT_ACTION_BUTTON_SUBMIT[KEY_FORM_CAR_NAMES]](e) {
    e.preventDefault();

    const input = this.carNamesForm.getInputValue();

    if (!isValidCarNamesInput(input)) {
      alert(MSG_ERROR);
      this.carNamesForm.initInputValue();
      return;
    }

    this.setCarsByInput(input);
    displayRacingCountHeading(this.app);
    this.displayRacingCountForm();
  }

  [DICT_ACTION_BUTTON_SUBMIT[KEY_FORM_RACING_COUNT]](e) {
    e.preventDefault();

    const input = this.racingCountForm.getInputValue();
    if (!isValidRacingCountInput(input)) {
      alert(MSG_ERROR);
      this.racingCountForm.initInputValue();
      return;
    }

    this.setRacingCountByinput(input);
    displayRacingResultHeading(this.app);
    for (let i = 0; i < this.racingCount; i++) {
      race(this.cars);
      displayRaceStatus(this.app, this.cars);
    }
    displayWinners(this.app, this.getWinners());
  }

  onClick(event) {
    const { action } = event.target.dataset;

    if (action) {
      this[action](event);
    }
  }
}

new RacingGame();
