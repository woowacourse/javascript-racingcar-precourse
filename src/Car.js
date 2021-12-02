/* eslint-disable no-undef */
export default class Car {
  constructor(name) {
    this._name = name;
    this._location = 0;
  }

  tryMove() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) this._location += 1;
  }
}
