export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = "";
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      this.distance += "-";
    }
  }
}
