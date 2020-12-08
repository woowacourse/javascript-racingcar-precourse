export default class Car {
  constructor(name) {
    this.name = name;
    this.movingDistance = 0;
  }

  drive() {
    const randomNumber = Math.floor(Math.random() * 10);
    this.movingDistance = randomNumber > 3 ? this.movingDistance + 1 : this.movingDistance;
  }
}
