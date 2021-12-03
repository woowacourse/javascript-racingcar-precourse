import { IS_GO } from '../constant/constant.js';

export class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  startGame() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= IS_GO) {
      this.score += 1;
    }
  }
}
