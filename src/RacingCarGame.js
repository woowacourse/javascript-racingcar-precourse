import Car from "./Car.js";

export default class RacingCarGame {
  #cars;
  #count;
  result = "";

  constructor(names, count) {
    this.#cars = names.map((name) => new Car(name));
    this.#count = count;
    this.play();
  }

  play() {
    for (let i = 0; i < this.#count; i++) {
      this.#cars.forEach((car) => {
        car.move();
        this.result += car.status();
      });
      this.result += "\n";
    }

    this.#cars.sort((a, b) => b.position - a.position);
    const winner = this.#cars
      .filter((car) => this.#cars[0].position === car.position)
      .map((car) => car.name);
    this.result += `최종 우승자 : ${winner.toString()}`;
  }
}
