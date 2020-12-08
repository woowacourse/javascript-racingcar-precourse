export default class Car {
  #name
  #moveCount

  constructor(name) {
    this.#name = name;
    this.#moveCount = [];
  }

  get name() {
    return this.#name;
  }

  get moveCount() {
    return this.#moveCount;
  }

  set moveCount(moveCount) {
    this.#moveCount = moveCount;
  }
}
