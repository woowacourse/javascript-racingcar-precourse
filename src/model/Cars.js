export default class Car {
  constructor(name) {
    this.name = name;
    this.currentCount = 0;
  }

  go() {
    if (MissionUtils.Random.pickNumberInRange(1, 10) >= 4) {
      this.currentCount++;
    }
  }

  showRunning() {
    let courrentLine = "";
    for (let i = 0; i < this.currentCount; i++) {
      courrentLine += "-";
    }

    return courrentLine;
  }
}
