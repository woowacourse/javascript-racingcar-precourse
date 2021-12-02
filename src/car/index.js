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

  getCarStatus() {
    let message = `${this.name}: `;
    let i;
    for (i = 0; i < this.move; i += 1) {
      message += '-';
    }

    return message;
  }
}
