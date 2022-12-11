const { Random } = require('@woowacourse/mission-utils');
const { RACING_RANGE } = require('../lib/constants/system');
const { moveFormatter } = require('../lib/utils/formatter');
const { isGoOrStop } = require('../lib/utils/system');

class Car {
  #name;

  #move;

  constructor(name) {
    this.#name = name;
    this.#move = 0;
  }

  goOrStop() {
    const { min, max } = RACING_RANGE;
    const randomNumber = Random.pickNumberInRange(min, max);
    if (isGoOrStop(randomNumber)) this.#go();
  }

  #go() {
    this.#move += RACING_RANGE.go;
  }

  getName() {
    return this.#name;
  }

  getMove() {
    return this.#move;
  }

  getMoveMessage() {
    return moveFormatter(this.#name, this.#move);
  }
}
module.exports = Car;
