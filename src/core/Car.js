export default class Car {
  constructor(name) {
    this._name = name;
    this._distance = 0;
  }

  goForward() {
    const go = MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
    if (!go) return;
    this._distance += 1;
  }

  getCarInformaiton() {
    return { name: this._name, distance: this._distance };
  }
}
