import { $ } from '../utils/utils.js';

export default class GameView {
  constructor() {
    this.$app = $('#app');
  }

  resetRacingCountInput() {
    const $racingCountInput = $('#racing-count-input');

    $racingCountInput.value = '';
  }

  resetCarNamesInput() {
    const $carNamesInput = $('#car-names-input');

    $carNamesInput.value = '';
  }

  renderTotalRound(totalRoundString) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = totalRoundString;

    this.$app.append(newDiv);
  }

  renderResult(carInfo) {
    const newSpan = document.createElement('span');
    newSpan.innerHTML = `최종 우승자: <span id="racing-winners">${carInfo}</span>`;

    this.$app.append(newSpan);
  }
}
