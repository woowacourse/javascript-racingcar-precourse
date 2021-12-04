import { EXCUTE_RESULT_SENTENCE } from '../constants/index.js';

export default class Render {
  constructor(element) {
    this.$element = element;
    this.initDOM();
  }

  /**
   * DOM을 초기화합니다.
   */
  initDOM() {
    this.$element.textContent = EXCUTE_RESULT_SENTENCE;
    this.virtualDOM = document.createElement('div');
    this.childDOM = null;
  }

  /**
   * 레이스별 전진 상황을 가상 DOM으로 그려 멤버 변수에 저장합니다.
   *
   * @param {number} race
   */
  createDOM(race) {
    this.childDOM = null;

    const $div = document.createElement('div');
    $div.setAttribute('id', `race-${race}-result`);
    this.childDOM = $div;
    this.virtualDOM.appendChild(this.childDOM);

    const $br = document.createElement('br');
    this.virtualDOM.appendChild($br);
  }

  /**
   * 각 자동차의 전진 횟수가 반영된 p 객체를 가상 돔에 추가합니다.
   *
   * @param {HTMLParagraphElement} $p
   */
  appendChildDOM($p) {
    this.childDOM.appendChild($p);
  }

  /**
   * 우승자에 대한 내용을 가상 돔으로 작성합니다.
   *
   * @param {string} winners
   * @returns
   */
  displayWinners(winners) {
    const $spanParent = document.createElement('span');
    $spanParent.innerText = '최종 우승자: ';

    const $span = document.createElement('span');
    $span.setAttribute('id', 'racing-winners');
    $span.innerText = `${winners}`;

    $spanParent.appendChild($span);
    return $spanParent;
  }

  /**
   * 최종 결과를 DOM에 렌더링합니다.
   *
   * @param {string} winners
   */
  renderDOM(winners) {
    this.$element.appendChild(this.virtualDOM);
    this.$element.appendChild(this.displayWinners(winners));
  }
}
