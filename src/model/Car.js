import { NUMBER } from '../utils/constants.js';
/* eslint-disable no-undef */
export default class Car {
  constructor(name) {
    this._name = name;
    this._location = NUMBER.ZERO;
  }

  get name() {
    return this._name;
  }

  get location() {
    return this._location;
  }

  tryMove() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(NUMBER.ZERO, NUMBER.NINE);
    if (randomNumber >= NUMBER.FOUR) this._location += NUMBER.ONE;
  }
}
