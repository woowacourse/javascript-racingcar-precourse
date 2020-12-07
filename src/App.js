import RacingCarGame from "./RacingCarGame.js";

export default class App {
  #element;
  #carNames;
  #game;

  constructor(elementSelector) {
    this.#element = document.querySelector(elementSelector);
    this.#bindEvent("#car-names-submit", "click", this.#onSubmitCarNames);
    this.#bindEvent("#racing-count-submit", "click", this.#onSubmitCount);
  }

  #bindEvent(selector, eventType, handler) {
    this.#element
      .querySelector(selector)
      .addEventListener(eventType, handler.bind(this));
  }

  #onSubmitCarNames() {
    const inputValue = this.#element.querySelector("#car-names-input").value;
    this.#carNames = inputValue.split(",");

    if (!this.#validateCars(this.#carNames)) {
      return alert("입력값을 확인해주세요.");
    }

    this.#disableCarNames();
    this.#showRacingCount();
  }

  #validateCars(cars) {
    const lessThanFiveChars = cars.every((car) => car.length <= 5);
    const noDuplicated = new Set(cars).size === cars.length;

    return lessThanFiveChars && noDuplicated;
  }

  #disableCarNames() {
    this.#element.querySelector("#car-names-input").disabled = true;
    this.#element.querySelector("#car-names-submit").disabled = true;
  }

  #showRacingCount() {
    this.#element.querySelector("#racing-count").style.display = "block";
  }

  #onSubmitCount() {
    const count = this.#element.querySelector("#racing-count-input").value;
    this.#game = new RacingCarGame(this.#carNames, count);
    this.#showResult(this.#game.result);
  }

  #showResult(result) {
    result.split("\n").forEach((text) => {
      const div = document.createElement("div");
      div.innerText = text;
      this.#element.querySelector("#result").appendChild(div);
    });

    this.#element.querySelector("#result").style.display = "block";
  }
}
