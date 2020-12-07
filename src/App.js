export default class App {
  #element;

  constructor(elementSelector) {
    this.#element = document.querySelector(elementSelector);
    this.#bindEvent('#car-names-submit', 'click', this.#onSubmitCarNames);
  }

  #bindEvent(selector, eventType, handler) {
    this.#element.querySelector(selector).addEventListener(eventType, handler.bind(this));
    return this;
  }

  #onSubmitCarNames() {
    const inputValue = this.#element.querySelector('#car-names-input').value;
    const cars = inputValue.split(',');

    if (!this.#validateCars(cars)) {
      return alert('입력값을 확인해주세요.');
    }
  }

  #validateCars(cars) {
    const lessThanFiveChars = cars.every(car => car.length <= 5);
    const noDuplicated = new Set(cars).size === cars.length;

    return lessThanFiveChars && noDuplicated;
  }
}
