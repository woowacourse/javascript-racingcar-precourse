import { EXCUTE_RESULT_SENTENCE } from '../constants/index.js';

export default class Render {
  constructor(element) {
    this.$element = element;

    this.virtualDOM = document.createElement('div');
    this.childDOM = null;
  }

  initDOM() {
    this.$element.innerText = EXCUTE_RESULT_SENTENCE;
  }

  createDOM(race) {
    this.childDOM = null;

    const $div = document.createElement('div');
    $div.setAttribute('id', `race-${race}-result`);
    this.childDOM = $div;
    this.virtualDOM.appendChild(this.childDOM);

    const $br = document.createElement('br');
    this.virtualDOM.appendChild($br);
  }

  appendChildDOM(race, $p) {
    this.childDOM.appendChild($p);
  }

  displayWinners(winners) {
    const $spanParent = document.createElement('span');
    $spanParent.innerText = '최종 우승자: ';

    const $span = document.createElement('span');
    $span.setAttribute('id', 'racing-winners');
    $span.innerText = `${winners}`;

    $spanParent.appendChild($span);
    return $spanParent;
  }

  renderDOM(winners) {
    this.$element.appendChild(this.virtualDOM);
    this.$element.appendChild(this.displayWinners(winners));
  }
}
