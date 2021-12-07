import { RANDOM_NUMBER } from '../utils/constant.js';

class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
    this.stepByRound = [];
  }

  move(racingCount) {
    for (let i = 0; i < racingCount; i++) {
      this.step += this.randomMove();
      this.stepByRound.push(this.step);
    }
  }

  randomMove() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      RANDOM_NUMBER.start,
      RANDOM_NUMBER.end,
    );
    let isMove = 0;
    if (randomNumber >= RANDOM_NUMBER.winSeparater) {
      isMove = 1;
    }
    return isMove;
  }
}

export default Car;
