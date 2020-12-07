import RacingCarGame from "./game.js";
import InputHandler from "./handler/inputHandler.js";
import { convertStringToNumber } from "./common/util.js";
export default class App {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;

    this.inputHandler = new InputHandler();

    this.carNameSubmitButton = document.getElementById("car-names-submit");
    this.racingCountSubmitButton = document.getElementById("racing-count-submit");
    this.racingCountContainer = document.getElementById("racing-count-container");
    this.gameResultContainer = document.getElementById("game-result-container");
  }

  displayRacingCountContainer() {
    this.racingCountContainer.style.display = "block";
  }

  submitCarNames() {
    const carNamesInput = this.inputHandler.getCarNamesInput();
    const carNames = this.inputHandler.parseCarNames(carNamesInput);
    const isValidCarNames = this.inputHandler.validateCarNames(carNames);

    if (!isValidCarNames) {
      return;
    }

    this.carNames = carNames;
    this.displayRacingCountContainer();
  }

  submitRacingCount() {
    const racingCountInput = this.inputHandler.getRacingCountInput();
    const racingCount = convertStringToNumber(racingCountInput);
    const isValidRacingCount = this.inputHandler.validateRacingCount(racingCount);

    if (!isValidRacingCount) {
      return;
    }

    this.racingCount = racingCount;
    this.handleGame();
  }

  createRaceHTML(raceCarPositions) {
    let raceHTML = `<p>`;

    for (let carPosition of raceCarPositions) {
      for (let carName in carPosition) {
        raceHTML += `${carName}: ${carPosition[carName]}<br>`;
      }

      raceHTML += `</p>`;
    }

    return raceHTML;
  }

  createWinnerHTML(winners) {
    const winnerString = winners.join(",");
    const winnerHTML = `<div> 최종 우승자: ${winnerString} </div>`;

    return winnerHTML;
  }

  renderResultContainer(templateHTML) {
    this.gameResultContainer.innerHTML = templateHTML;
  }

  handleGame() {
    const game = new RacingCarGame(this.carNames, this.racingCount);
    const races = game.runAllRaces();
    const winners = game.getWinnerNames();

    const racesHTML = this.createRaceHTML(races);
    const winnersHTML = this.createWinnerHTML(winners);
    this.renderResultContainer(racesHTML + winnersHTML);
  }

  onClick(event) {
    const target = event.target;

    if (target === this.carNameSubmitButton) {
      this.submitCarNames();
    }

    if (target === this.racingCountSubmitButton) {
      this.submitRacingCount();
    }
  }
}

const app = new App();
document.addEventListener("click", (event) => app.onClick(event));
