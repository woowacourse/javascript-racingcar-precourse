/* global MissionUtils */

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  race() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.distance += 1;
    }

    return { name: this.name, distance: this.distance };
  }
}
