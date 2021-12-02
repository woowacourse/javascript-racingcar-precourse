import { GAME_RULE } from '../constants/index.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  makeRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      GAME_RULE.randomMin,
      GAME_RULE.randomMax,
    );

    return randomNumber;
  }

  moveCar() {
    if (this.makeRandomNumber() >= 4) {
      this.move += 1;
    }
  }
}
