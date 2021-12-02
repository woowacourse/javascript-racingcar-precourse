import Car from "./Car.js";

export default class RacingCar {
  constructor() {
    this.$result;
    this.$winnerDiv;
    this.$app = document.getElementById("app");
    this.cars = [];
    this.init();
  }

  init() {
    const resultDiv = document.createElement("div");
    const winnerDiv = document.createElement("div");
    resultDiv.id = "result";
    winnerDiv.id = "winners";

    this.$app.appendChild(resultDiv);
    this.$app.appendChild(winnerDiv);

    this.$result = document.getElementById("result");
    this.$winnerDiv = document.getElementById("winners");
  }

  resetGame() {
    this.$result.innerHTML = "";
    this.$winnerDiv.innerHTML = "";

    this.cars.forEach(car => (car.moveDistance = 0));
  }

  makeCarArray(carInputs) {
    this.cars = carInputs.split(",").map(carInput => new Car(carInput));
  }

  getWinnerString(winner) {
    return `최종 우승자: <span id="racing-winners">${winner.join(", ")}</span>`;
  }

  showWinner() {
    let maxDistance = 0;
    this.cars.forEach(
      car => (maxDistance = Math.max(maxDistance, car.moveDistance))
    );

    const winner = this.cars
      .filter(car => car.moveDistance === maxDistance)
      .map(car => car.name);

    this.$winnerDiv.innerHTML = this.getWinnerString(winner);
  }

  playCarsOneRound() {
    this.cars.forEach(car => {
      car.playOneRound();
      this.$result.innerHTML += car.getState();
    });
    this.$result.innerHTML += "<br/>";
  }

  playGame(racingCount) {
    let i = 0;
    for (; i < racingCount; i++) {
      this.playCarsOneRound();
    }
    this.showWinner();
  }
}
