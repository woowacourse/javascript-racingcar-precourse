export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  drive() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) this.distance += 1;
  }
}
