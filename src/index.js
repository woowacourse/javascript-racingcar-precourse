import RacingCar from "./RacingCar.js";

export default class RacingCarGame {
  cars = [];
  constructor() {
    this.allClickEventListener();
  }

  nameSubmitClickEvent() {
    const carNames = document
      .getElementById("car-names-input")
      .value.split(",");
    this.cars = carNames.map((carName) => new RacingCar(carName));
    const racingCountContainer = document.getElementById(
      "racing-count-container"
    );
    racingCountContainer.style.display = "block";
  }

  countSubmitClickEvent() {
    const count = document.getElementById("racing-count-input").value;
    let i;
    for (i = 0; i < count; i++) {
      this.cars.forEach((car) => car.move());
      this.printMoveStatus();
    }
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
  }

  printMoveStatus() {
    const moveStatusEl = document.createElement("div");
    moveStatusEl.innerHTML = this.cars
      .map((car) => `${car.name}: ${"-".repeat(car.distance)}`)
      .join("<br />");
    moveStatusEl.style.marginBottom = "30px";
    const resultContainer = document.getElementById("result-container");
    resultContainer.appendChild(moveStatusEl);
  }

  allClickEventListener() {
    this.addEventListenerById("car-names-submit", () =>
      this.nameSubmitClickEvent()
    );
    this.addEventListenerById("racing-count-submit", () =>
      this.countSubmitClickEvent()
    );
  }

  addEventListenerById(id, event) {
    const element = document.getElementById(id);
    element.addEventListener("click", event);
  }
}

new RacingCarGame();
