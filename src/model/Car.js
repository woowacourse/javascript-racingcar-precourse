import { EMPTY_STRING } from '../data/constants.js';

// eslint-disable-next-line no-undef
const isTryMove = () => MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
const getMoveCount = (logs) => {
  return logs.reduce((prev, current) => (current ? prev + 1 : prev), 0);
};

export default class Car {
  constructor(name) {
    this.name = name.trim();
    this.logs = [];
  }

  move(count) {
    let score = 0;
    this.logs = Array.from({ length: count }, () => {
      const isMoved = isTryMove();
      if (isMoved === true) score += 1;

      return isMoved;
    });

    return score;
  }

  get raceLogs() {
    const result = [];
    this.logs.forEach((isMoved, index) => {
      const moveCount = getMoveCount(this.logs.slice(0, index + 1));
      const moveText = EMPTY_STRING.padStart(moveCount, '-');

      result.push(`${this.name}: ${moveText}`);
    });

    return result;
  }
}
