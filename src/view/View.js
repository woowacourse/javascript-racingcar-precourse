/* eslint-disable class-methods-use-this */
import { isValidCarNames, isRacingCountValid } from '../utils/validations.js';
import { $ } from '../utils/domHelpers.js';
import template from '../template/template.js';
import {
  ERROR_WRONG_INPUT_CAR_NAMES,
  ERROR_WRONG_INPUT_RACING_COUNT,
} from '../config/config.js';

export default class View {
  initView() {
    $('#app').insertAdjacentHTML('beforeend', `<div id="result-div"></div>`);
  }

  hideElement() {
    $('#racing-count-heading').style.visibility = 'hidden';
    $('#racing-count-form').style.visibility = 'hidden';
    $('#result-heading').style.visibility = 'hidden';
  }

  showRacingCountSection() {
    $('#racing-count-heading').style.visibility = 'visible';
    $('#racing-count-form').style.visibility = 'visible';
  }

  preventPageRefresh() {
    $('#car-names-form').addEventListener('submit', (e) => {
      e.preventDefault();
    });

    $('#racing-count-form').addEventListener('submit', (e) =>
      e.preventDefault()
    );
  }

  bindCreateCarList(handler) {
    $('#car-names-submit').addEventListener('click', () => {
      const inputString = $('#car-names-input').value.trim();
      const nameList = inputString.split(',').map((name) => name.trim());

      if (!isValidCarNames(nameList)) {
        alert(ERROR_WRONG_INPUT_CAR_NAMES);
        $('#car-names-input').value = '';

        return;
      }

      $('#result-div').innerHTML = '';

      handler(nameList);
    });
  }

  bindStartRace(handler) {
    $('#racing-count-submit').addEventListener('click', () => {
      const racingCount = $('#racing-count-input').valueAsNumber;

      if (!isRacingCountValid(racingCount)) {
        alert(ERROR_WRONG_INPUT_RACING_COUNT);
        $('#racing-count-input').value = '';

        return;
      }

      handler(racingCount);
    });
  }

  renderFinalWinnerSection({ raceResultList, winnerNameList }) {
    $('#result-heading').style.visibility = 'visible';
    $('#result-div').innerHTML = template.resultTemplate(
      raceResultList,
      winnerNameList
    );
  }
}
