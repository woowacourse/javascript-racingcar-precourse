import Line from '../models/line.js';

class GameController {
  #lines;

  #racingTry;

  #racingCount;

  constructor(cars, racingCount) {
    this.#lines = cars.map((car) => new Line(car));
    this.#racingTry = 0;
    this.#racingCount = racingCount;
  }

  get lines() {
    return this.#lines;
  }

  get racingTry() {
    return this.#racingTry;
  }

  get racingCount() {
    return this.#racingCount;
  }

  static #tryForwardLineByRandom(line) {
    // eslint-disable-next-line no-undef
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    const betResult = randomNumber >= 4;
    if (betResult) {
      line.forwardCarOneStep();
    }
  }

  isGameEnded() {
    return this.#racingTry >= this.#racingCount;
  }

  progressOneRacing() {
    if (this.isGameEnded()) {
      return;
    }

    this.#lines.forEach(GameController.#tryForwardLineByRandom);
    this.#racingTry += 1;
  }

  calculateWinLines() {
    if (!this.isGameEnded()) {
      return [];
    }

    const positions = this.#lines.map((line) => line.position);
    const maxPosition = Math.max(...positions);
    const winLines = this.#lines.filter(
      (line) => line.position === maxPosition
    );
    return winLines;
  }
}

export default GameController;
