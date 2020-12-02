export default class RacingCar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
  move() {
    const randomNumber = Math.floor(Math.random() * 9);
    if (randomNumber > 3) this.distance++;
  }
}
