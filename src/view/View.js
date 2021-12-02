import { isValidCarNames, isRacingCountValid } from '../utils/validations.js';
import { $, preventPageRefresh } from '../utils/domHelpers.js';
import template from '../template/template.js';
import {
  ERROR_WRONG_INPUT_CAR_NAMES,
  ERROR_WRONG_INPUT_RACING_COUNT,
} from '../config/config.js';

export default class View {
  constructor() {
    this.$app = $('#app');
    this.$app.insertAdjacentHTML('beforeend', `<div id="result-div"></div>`);
    this.$carNamesForm = $('#car-names-form');
    this.$carNamesSubmit = $('#car-names-submit');
    this.$carNamesInput = $('#car-names-input');
    this.$racingCountHeading = $('#racing-count-heading');
    this.$racingCountForm = $('#racing-count-form');
    this.$racingCountSubmit = $('#racing-count-submit');
    this.$racingCountInput = $('#racing-count-input');
    this.$resultHeading = $('#result-heading');
    this.$resultDiv = $('#result-div');

    this.hideElement();

    preventPageRefresh();
  }

  hideElement() {
    this.$racingCountHeading.style.visibility = 'hidden';
    this.$racingCountForm.style.visibility = 'hidden';
    this.$resultHeading.style.visibility = 'hidden';
  }

  showRacingCountSection() {
    this.$racingCountHeading.style.visibility = 'visible';
    this.$racingCountForm.style.visibility = 'visible';
  }

  bindCreateCarList(handler) {
    this.$carNamesSubmit.addEventListener('click', () => {
      const inputString = this.$carNamesInput.value.trim();
      const nameList = inputString.split(',').map((name) => name.trim());

      if (!isValidCarNames(nameList)) {
        alert(ERROR_WRONG_INPUT_CAR_NAMES);
        this.$carNamesInput.value = '';

        return;
      }

      this.$resultDiv.innerHTML = '';

      handler(nameList);
    });
  }

  bindStartRace(handler) {
    this.$racingCountSubmit.addEventListener('click', () => {
      const racingCount = this.$racingCountInput.valueAsNumber;

      if (!isRacingCountValid(racingCount)) {
        alert(ERROR_WRONG_INPUT_RACING_COUNT);
        this.$racingCountInput.value = '';

        return;
      }

      handler(racingCount);
    });
  }

  render({ raceResultList, finalWinnerNameList }) {
    this.$resultHeading.style.visibility = 'visible';
    this.$resultDiv.innerHTML = template.resultTemplate(
      raceResultList,
      finalWinnerNameList
    );
  }
}
