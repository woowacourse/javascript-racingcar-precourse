export default class Car {
  constructor(name) {
    this.carName = name;
    this.forward = 0;
  }

  getCarName() {
    return this.carName;
  }

  getForward() {
    return this.forward;
  }

  goAndStop() {
    if (Math.floor(Math.random() * 10) >= 4) {
      this.forward += 1;
    }
  }
}
