import { $ } from './selector.js';

export default class GameView {
  constructor() {
    this.$app = $('#app');
    this.$racingCountTitle = $('#racing-count-title');
    this.$racingCountForm = $('#racing-count-form');
    this.$racingResultTitle = $('#racing-result-title');
    this.$racingCountInput = $('#racing-count-input');
    this.$carNamesInput = $('#car-names-input');
    this.$carNamesForm = $('#car-names-form');

    this.init();
  }

  init() {
    this.hide(this.$racingCountTitle);
    this.hide(this.$racingCountForm);
    this.hide(this.$racingResultTitle);
    this.$racingResultTitle.insertAdjacentHTML('afterend', '<div id="racing-result"></div>');
    this.$racingResult = $('#racing-result');
  }

  hide(tag) {
    tag.style.display = 'none';
  }

  show(tag) {
    tag.style.display = 'block';
  }

  resetRacingCountInput() {
    this.$racingCountInput.value = '';
  }

  resetCarNamesInput() {
    this.$carNamesInput.value = '';
  }

  resetRacingResult() {
    this.$racingResult.innerHTML = '';
  }

  renderTotalRound(totalRoundText) {
    this.$racingResult.insertAdjacentHTML('beforeend', totalRoundText);
  }

  renderResult(winnerText) {
    const resultText = `최종 우승자: <span id="racing-winners">${winnerText}</span>`;

    this.$racingResult.insertAdjacentHTML('beforeend', resultText);
  }
}
