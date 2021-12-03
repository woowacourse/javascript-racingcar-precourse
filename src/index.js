import Form from './dom/form.js';
import removeChildrenByTagName from './dom/utils/removeChildrenByTag.js';
import generateCarNamesForm from './dom/generateCarNamesForm.js';
import {
  ID_APP,
  ID_CAR_NAMES,
  ACTION_CHECK_CAR_NAMES,
  MSG_ERROR,
} from './dom/const.js';
import isValidCarNamesInput from './game/utils/isValidCarNamesInput.js';
import toCarNameList from './game/utils/toCarNameList.js';
import Car from './car.js';
import displayRacingCountForm from './dom/displayRacingCountForm.js';

export default class RacingGame {
  constructor() {
    this.app = document.getElementById(ID_APP);
    this.app.onclick = this.onClick.bind(this);
    this.init();

    this.carNamesForm = new Form(ID_CAR_NAMES);
    this.carNamesForm.setButtonAction(ACTION_CHECK_CAR_NAMES);

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
  }

  onClick(event) {
    const { action } = event.target.dataset;

    if (action) {
      this[action](event);
    }
  }
}

new RacingGame();
