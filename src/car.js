import { inputRacingCount } from './index.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.racingCount = inputRacingCount.racingCount;
    this.moveArray = this.checkCanMove();
    this.totalDistance = this.totalMove();
  }

  makeRandomNum() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  goOrStop(randomNum) {
    if (randomNum < 4) {
      return false;
    }

    return true;
  }

  // 각 회차마다 갈 수 있는지 없는지 저장
  checkCanMove() {
    const canMove = [];

    for (let i = 0; i < this.racingCount; i += 1) {
      const randomNum = this.makeRandomNum();
      canMove.push(this.goOrStop(randomNum));
    }

    return canMove;
  }

  totalMove() {
    let countMove = 0;

    for (let i = 0; i < this.moveArray.length; i += 1) {
      if (this.moveArray[i] === true) {
        countMove += 1;
      }
    }

    return countMove;
  }
}
