export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 4) {
      this.position++;
    }
  }
}
