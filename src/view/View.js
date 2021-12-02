/* eslint-disable class-methods-use-this */

import { isValidCarNames, isRacingCountValid } from '../utils/utils.js';
import { $ } from '../dom/helpers.js';

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
        alert('잘못된 입력입니다.');
        // $('#car-names-input').value = this.carList
        //   .map((car) => car.name)
        //   .join(',');

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
        alert('잘못된 입력입니다.');
        $('#racing-count-input').value = '';

        return;
      }

      handler(racingCount);
    });
  }

  winnerMessageTemplate(winnerNameList) {
    const winnerMessage = winnerNameList.join(',');
    return `<p>최종 우승자: <span id="racing-winners">${winnerMessage}</span></p>`;
  }

  renderFinalWinnerSection({ raceResultList, winnerNameList }) {
    $('#result-heading').style.visibility = 'visible';
    $('#result-div').innerHTML = '';

    const paragraphList = raceResultList.map((raceResult) => {
      const stringList = raceResult.map(
        (result) => `${result.name}: ${'-'.repeat(result.distance)}`
      );

      const paragraph = `<p>${stringList.join('<br>')}</p>`;

      return paragraph;
    });

    const res = paragraphList.join('');

    $('#result-div').innerHTML = `${res}${this.winnerMessageTemplate(
      winnerNameList
    )}`;
  }
}
