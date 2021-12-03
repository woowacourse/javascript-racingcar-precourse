import Form from './form.js';
import {
  ID_APP,
  FORM_CAR_NAMES,
  FORM_RACING_COUNT,
  ACTION_CHECK_CAR_NAMES,
  ACTION_CHECK_RACING_COUNT,
} from './dom/const.js';
import Car from './car.js';
import isValidCarNamesInput from './utils/isValidCarNamesInput.js';
import isValidRacingCountInput from './utils/isValidRacingCountInput.js';
import toCarNameList from './utils/toCarNameList.js';

export default class RacingGame {
  constructor() {
    this.app = document.getElementById(ID_APP);
    this.carNamesForm = new Form(
      FORM_CAR_NAMES.inputId,
      FORM_CAR_NAMES.buttonId
    );
    this.racingCountForm = new Form(
      FORM_RACING_COUNT.inputId,
      FORM_RACING_COUNT.buttonId
    );

    this.app.onclick = this.onClick.bind(this);
    this.carNamesForm.setButtonAction(ACTION_CHECK_CAR_NAMES);
    this.racingCountForm.setButtonAction(ACTION_CHECK_RACING_COUNT);

    this.cars = [];
    this.racingCount = 0;
  }

  [ACTION_CHECK_CAR_NAMES](e) {
    e.preventDefault();

    const userInput = this.carNamesForm.getInputValue();
    if (!isValidCarNamesInput(userInput)) return;

    const carNames = toCarNameList(userInput);
    this.cars = Car.generateCars(carNames);
  }

  [ACTION_CHECK_RACING_COUNT](e) {
    e.preventDefault();

    const userInput = this.racingCountForm.getInputValue();
    if (!isValidRacingCountInput(userInput)) return;

    this.racingCount = Number(userInput);
  }

  onClick(event) {
    const { action } = event.target.dataset;

    if (action) {
      this[action](event);
    }
  }
}

new RacingGame();
