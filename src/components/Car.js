export default class Car {
  constructor(name) {
    this.name = name;
    this.moves = 0;
  }

  /**
   * 자동차를 전진시킵니다.
   *
   * @returns {Car}
   */
  moveForward() {
    this.moves += 1;
    return this;
  }

  /**
   * 현재 자동차의 전진 횟수를 출력하는 DOM 객체를 생성하여 반환합니다.
   *
   * @returns {HTMLParagraphElement}
   */
  template() {
    const $p = document.createElement('p');
    $p.innerHTML = `<strong>${this.name}</strong>: ${'-'.repeat(this.moves)}`;
    return $p;
  }
}
