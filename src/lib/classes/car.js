import { CONSTANT_NUM } from '../utils/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.progress = '';
  }

  move() {
    const MAX_NUM = 9;
    const MIN_NUM = 0;
    let randomNum = Math.floor(
      Math.random() * (MAX_NUM + 1 - MIN_NUM) + MIN_NUM
    );
    if (randomNum >= CONSTANT_NUM.MOVE_AVAILABLE) {
      this.progress += '-';
    }
  }
}
