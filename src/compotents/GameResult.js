export class GameResult {
  constructor() {
    this.initializeDOM();
  }

  initializeDOM = () => {
    this.resultHTML = ``;
    this.resultContainer = document.getElementById("result-container");
  };

  updateResultPerRound = (cars) => {
    cars.forEach((car) => {
      this.resultHTML += this.getCarHTML(car.name, car.distance);
    });
    this.resultHTML += `<br/>`;
  };

  updateResultHTML = () => {
    this.resultContainer.append(this.resultHTML);
  };
  getCarHTML = (name, distance) => {
    return `<p>${name}: ${"-".repeat(distance)}</p></br>`;
  };

  getWinnerHTML = (names) => {
    return `<p>최종 우승자 ${names.join(",")}</p>`;
  };
}
