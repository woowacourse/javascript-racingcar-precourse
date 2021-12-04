import { canMoveCar } from '../utils/game.js';

export default class Car {
  constructor(name) {
    this._name = name;
    this._distance = 0;
  }

  goForward() {
    if (!canMoveCar()) return;
    this._distance += 1;
  }

  getCarInformaiton() {
    return { name: this._name, distance: this._distance };
  }
}
