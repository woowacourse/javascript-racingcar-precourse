import Form from './dom/form.js';
import removeChildrenByTagName from './dom/utils/removeChildrenByTag.js';
import generateCarNamesForm from './dom/generateCarNamesForm.js';
import {
  ID_APP,
  ID_CAR_NAMES,
  ID_RACING_COUNT,
  ACTION_CHECK_CAR_NAMES,
  ACTION_CHECK_RACING_COUNT,
  MSG_ERROR,
  BUTTON_SUBMIT_TEXT,
} from './dom/const.js';
import isValidCarNamesInput from './game/utils/isValidCarNamesInput.js';
import isValidRacingCountInput from './game/utils/isValidRacingCountInput.js';
import toCarNameList from './game/utils/toCarNameList.js';
import Car from './car.js';
import displayRacingCountForm from './dom/displayRacingCountForm.js';
import displayRaceStatus from './dom/displayRaceStatus.js';
import race from './game/race.js';
import displayRacingResultHeading from './dom/displayRacingResultHeading.js';
import displayWinners from './dom/displayWinners.js';

export default class RacingGame {
  constructor() {
    this.app = document.getElementById(ID_APP);
    this.app.onclick = this.onClick.bind(this);
    this.init();

    this.carNamesForm = new Form(ID_CAR_NAMES);
    this.carNamesForm.setButtonAction(ACTION_CHECK_CAR_NAMES);
    this.carNamesForm.setButtonText(BUTTON_SUBMIT_TEXT);

    this.racingCountForm = undefined;

    this.cars = [];
    this.racingCount = 0;
  }

  init() {
    removeChildrenByTagName(this.app, 'form');
    removeChildrenByTagName(this.app, 'h4');

    this.app.appendChild(generateCarNamesForm());
  }

  setCarsByInput(input) {
    this.cars = Car.generateCarsByNames(toCarNameList(input));
  }

  setRacingCountByinput(input) {
    this.racingCount = Number(input);
  }

  setRacingCountForm() {
    this.racingCountForm = new Form(ID_RACING_COUNT);
    this.racingCountForm.setButtonAction(ACTION_CHECK_RACING_COUNT);
    this.racingCountForm.setButtonText(BUTTON_SUBMIT_TEXT);
  }

  getWinners() {
    const maxPosition = Car.getMaxPosition(this.cars);
    return Car.getCarsByPosition(this.cars, maxPosition).map((car) =>
      car.getName()
    );
  }

  [ACTION_CHECK_CAR_NAMES](e) {
    e.preventDefault();

    const input = this.carNamesForm.getInputValue();

    if (!isValidCarNamesInput(input)) {
      alert(MSG_ERROR);
      this.carNamesForm.initInputValue();
      return;
    }

    this.setCarsByInput(input);
    displayRacingCountForm(this.app);
    this.setRacingCountForm();
  }

  [ACTION_CHECK_RACING_COUNT](e) {
    e.preventDefault();

    const input = this.racingCountForm.getInputValue();
    if (!isValidRacingCountInput(input)) {
      alert(MSG_ERROR);
      this.racingCountForm.initInputValue();
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
