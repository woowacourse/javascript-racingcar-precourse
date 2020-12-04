export default class Car {
  #name
  #randomRacingNumbers
  #racingResult

  constructor(name) {
    this.#name = name;
    this.#randomRacingNumbers = [];
    this.#racingResult = '';
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

  get racingResult() {
    return this.#racingResult;
  }

  plusRacingResult() {
    this.#racingResult += '-';
  }
}
