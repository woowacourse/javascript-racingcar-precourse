const CONDITION = Object.freeze({
  go: 4,
  point: 1,
  zero: 0,
});

class Car {
  #name;

  #go = 0;

  constructor(name) {
    this.#name = name;
  }

  goOrstop(number) {
    const { go, point, zero } = CONDITION;

    this.#go += Number(number) >= go ? point : zero;
  }

  getResult() {
    return [this.#name, this.#go];
  }
}
module.exports = Car;
