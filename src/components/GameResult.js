import {
  getCarHTML,
  getWinnerHTML,
  getHeaderHTML,
} from "../utils/templates.js";

export class GameResult {
  constructor({ getWinners }) {
    this.resultHTML = ``;
    this.getWinners = getWinners;
    this.initializeDOM();
  }

  initializeDOM = () => {
    this.resultHTML = getHeaderHTML();
    this.resultContainer = document.getElementById("result-container");
  };

  updateResultPerRound = (cars) => {
    cars.forEach((car) => {
      this.resultHTML += getCarHTML(car.name, car.distance);
    });
    this.resultHTML += `<br/>`;
  };

  updateResultHTMLWithWinners = () => {
    let winners = this.getWinners();
    this.resultHTML += getWinnerHTML(winners);

    this.render();
  };

  render = () => {
    this.resultContainer.innerHTML = this.resultHTML;
  };
}
