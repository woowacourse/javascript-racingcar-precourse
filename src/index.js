import RacingCar from "./RacingCar.js";

export default class RacingCarGame {
  cars = [];
  constructor() {
    this.allClickEventListener();
  }

  confirmInput() {
    const carNamesInput = document.getElementById("car-names-input");
    const carNames = carNamesInput.value.split(",");
    const tempCars = [];
    let i;
    for (i = 0; i < carNames.length; i++) {
      if (carNames[i].length > 5) {
        alert("입력된 값이 잘못 되었습니다.");
        carNamesInput.value = "";
        return;
      }
      tempCars.push(new RacingCar(carNames[i]));
    }
    return tempCars;
  }

  nameSubmitClickEvent() {
    const carInstances = this.confirmInput();
    if (carInstances === undefined) return;
    this.cars = carInstances;
    const racingCountContainer = document.getElementById(
      "racing-count-container"
    );
    racingCountContainer.style.display = "block";
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

  printWinner() {
    const winners = this.cars.reduce((acc, car) => {
      if (acc.length === 0 || acc[0].distance === car.distance) {
        return [...acc, car];
      }
      if (acc[0].distance < car.distance) {
        return [car];
      }
      return acc;
    }, []);
    const winnerEl = document.createElement("span");
    winnerEl.innerHTML = `최종 우승자: ${winners
      .map((car) => car.name)
      .join(", ")}`;
    const resultContainer = document.getElementById("result-container");
    resultContainer.appendChild(winnerEl);
  }

  countSubmitClickEvent() {
    const count = document.getElementById("racing-count-input").value;
    let i;
    for (i = 0; i < count; i++) {
      this.cars.forEach((car) => car.move());
      this.printMoveStatus();
    }
    this.printWinner();
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
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
