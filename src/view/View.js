import template from '../template/template.js';
import { $, preventPageRefresh } from '../utils/domHelpers.js';
import { isValidCarNames, isRacingCountValid } from '../utils/validations.js';
import {
  ERROR_WRONG_INPUT_CAR_NAMES,
  ERROR_WRONG_INPUT_RACING_COUNT,
} from '../config/config.js';

export default class View {
  constructor() {
    $('#app').insertAdjacentHTML('beforeend', `<div id="result-div"></div>`);

    this.$carNamesSubmit = $('#car-names-submit');
    this.$carNamesInput = $('#car-names-input');
    this.$racingCountHeading = $('#racing-count-heading');
    this.$racingCountSubmit = $('#racing-count-submit');
    this.$racingCountInput = $('#racing-count-input');
    this.$resultHeading = $('#result-heading');
    this.$resultDiv = $('#result-div');

    this.hideElement();
    preventPageRefresh();
  }

  hideElement() {
    this.$racingCountHeading.style.visibility = 'hidden';
    this.$racingCountInput.style.visibility = 'hidden';
    this.$racingCountSubmit.style.visibility = 'hidden';
    this.$resultHeading.style.visibility = 'hidden';
  }

  showRacingCountSection() {
    this.$racingCountHeading.style.visibility = 'visible';
    this.$racingCountInput.style.visibility = 'visible';
    this.$racingCountSubmit.style.visibility = 'visible';
  }

  getCarNameList() {
    return this.$carNamesInput.value.split(',').map((name) => name.trim());
  }

  bindCreateCarList(handler) {
    this.$carNamesSubmit.addEventListener('click', () => {
      const nameList = this.getCarNameList();

      if (!isValidCarNames(nameList)) {
        alert(ERROR_WRONG_INPUT_CAR_NAMES);
        this.$carNamesInput.value = '';

        return;
      }

      this.$resultHeading.style.visibility = 'hidden';
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
