import Car from "./Car.js";

export default class RacingCarGame {
  cars = [];
  constructor() {
    this.allClickEventListener();
  }

  validateCarName(carName) {
    if (carName.length > 5) {
      alert("입력된 값이 잘못 되었습니다.");
      const carNamesInput = document.getElementById("car-names-input");
      carNamesInput.value = "";
      return false;
    }
    return true;
  }

  getCarInstances() {
    const carNames = document
      .getElementById("car-names-input")
      .value.split(",");
    const tempCars = [];
    let i;
    for (i = 0; i < carNames.length; i++) {
      const carNameValidation = this.validateCarName(carNames[i]);
      if (!carNameValidation) {
        return;
      }
      tempCars.push(new Car(carNames[i]));
    }
    return tempCars;
  }

  showElementById(id) {
    const element = document.getElementById(id);
    element.style.display = "block";
  }

  nameSubmitClickEvent() {
    const carInstances = this.getCarInstances();
    if (carInstances === undefined) return;
    this.cars = carInstances;
    this.showElementById("racing-count-container");
  }

  appendElementToResultContainer(element) {
    const resultContainer = document.getElementById("result-container");
    resultContainer.appendChild(element);
  }

  printMoveStatus() {
    const moveStatusEl = document.createElement("div");
    moveStatusEl.innerHTML = this.cars
      .map((car) => `${car.name}: ${"-".repeat(car.distance)}`)
      .join("<br />");
    moveStatusEl.style.marginBottom = "30px";
    this.appendElementToResultContainer(moveStatusEl);
  }

  computeWinners(cars) {
    return cars.reduce((acc, car) => {
      if (acc.length === 0 || acc[0].distance === car.distance) {
        return [...acc, car];
      }
      if (acc[0].distance < car.distance) {
        return [car];
      }
      return acc;
    }, []);
  }

  printWinner() {
    const winners = this.computeWinners(this.cars);
    const winnerEl = document.createElement("span");
    winnerEl.innerHTML = `최종 우승자: ${winners
      .map((car) => car.name)
      .join(", ")}`;
    this.appendElementToResultContainer(winnerEl);
  }

  countSubmitClickEvent() {
    const count = document.getElementById("racing-count-input").value;
    let i;
    for (i = 0; i < count; i++) {
      this.cars.forEach((car) => car.move());
      this.printMoveStatus();
    }
    this.printWinner();
    this.showElementById("result-container");
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
