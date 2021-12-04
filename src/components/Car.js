import { NUMBER } from '../constants/index.js';

export default class Car {
  constructor(name, condition) {
    this.name = name;
    this.condition = condition;
    this.initMoves();
  }

  get move() {
    return 1;
  }

  get dontMove() {
    return 0;
  }

  /**
   * 전진 횟수를 초기화합니다.
   */
  initMoves() {
    this.moveCount = NUMBER.ZERO;
  }

  /**
   * 자동차를 전진시킵니다.
   *
   * @returns {Car}
   */
  moveForward(number) {
    this.moveCount += number >= this.condition ? this.move : this.dontMove;
    return [this.moveCount, this.template()];
  }

  /**
   * 현재 자동차의 전진 횟수를 출력하는 DOM 객체를 생성하여 반환합니다.
   *
   * @returns {HTMLParagraphElement}
   */
  template() {
    const $p = document.createElement('p');
    $p.innerHTML = `<strong>${this.name}</strong>: ${'-'.repeat(this.moveCount)}`;
    return $p;
  }
}
