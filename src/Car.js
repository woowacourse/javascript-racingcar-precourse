export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  };

  getNumber() {
    return Math.floor(Math.random() * Math.floor(10));
  }

  go() {
    this.position += 1;
  };

  play() {
    if (this.getNumber() >= 4) {
      this.go();
    }
  }
}
