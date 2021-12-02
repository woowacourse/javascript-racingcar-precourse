class Line {
  #car;

  #position;

  constructor(car) {
    this.#car = car;
    this.#position = 0;
  }

  get car() {
    return this.#car;
  }

  get position() {
    return this.#position;
  }

  forwardCarOneStep() {
    this.#position += 1;
  }
}

export default Line;
