export class GameResult {
  constructor() {}

  initializeDOM() {
    this.resultContainer = document.getElementById("result-container");
  }

  getResultString(cars) {
    let result = ``;

    cars.forEach((car) => {
      result += `${car.name}: ${"-".repeat(`${car.distance}`)}`;
    });
    return result;
  }
}
