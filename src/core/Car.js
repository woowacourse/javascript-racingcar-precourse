import { canMoveCar } from '../utils/game.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  goForward() {
    if (!canMoveCar()) return;
    this.distance += 1;
  }

  getCarInformaiton() {
    return { name: this.name, distance: this.distance };
  }
}
