import {
  ID_APP,
  ID_RESULT,
  ID_RACING_WINNERS_TITLE,
  ID_RACING_WINNERS,
} from '../constant/selector.js';

export default class Render {
  constructor() {
    this.$app = document.getElementById(ID_APP);

    this.$result = Render.appendNode(this.$app, 'div', {
      id: ID_RESULT,
    });
    this.$racingWinnersTitle = Render.appendNode(this.$app, 'span', {
      id: ID_RACING_WINNERS_TITLE,
    });
    this.$racingWinners = Render.appendNode(this.$app, 'span', {
      id: ID_RACING_WINNERS,
    });
  }

  static appendNode(parent, tag, attributes = {}) {
    const $tag = document.createElement(tag);

    Object.entries(attributes).forEach(([name, value]) => {
      $tag.setAttribute(name, value);
    });

    parent.appendChild($tag);

    return $tag;
  }

  renderRacingWinner(winenrList) {
    this.$racingWinnersTitle.textContent = '최종 우승자: ';
    this.$racingWinners.textContent = winenrList.join(',');
  }

  renderMoveResult(car) {
    const $div = Render.appendNode(this.$result, 'div');
    $div.textContent = `${car.getName()}: ${'-'.repeat(car.getNumMove())}`;
  }

  renderNewLine() {
    Render.appendNode(this.$result, 'br');
  }

  displayResult() {
    this.$result.removeAttribute('hidden');
    this.$racingWinnersTitle.removeAttribute('hidden');
    this.$racingWinners.removeAttribute('hidden');
  }

  initializeResult() {
    this.$result.innerHTML = '';
    this.$racingWinnersTitle.textContent = '';
    this.$racingWinners.textContent = '';

    this.$result.setAttribute('hidden', true);
    this.$racingWinnersTitle.setAttribute('hidden', true);
    this.$racingWinners.setAttribute('hidden', true);
  }
}
