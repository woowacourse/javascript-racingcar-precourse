export default class Car {
  #name
  #randomRacingNumbers

  constructor(name) {
    this.#name = name;
    this.#randomRacingNumbers = [];
  }

  get name() {
    return this.#name;
  }

  get randomRacingNumbers() {
    return this.#randomRacingNumbers;
  }

  set randomRacingNumbers(randomNumbers) {
    this.#randomRacingNumbers = randomNumbers;
  }
}
