import RacingCarGame from "./game.js";
import InputHandler from "./handler/inputHandler.js";
import OutputHandler from "./handler/outputHandler.js";
import { convertStringToNumber } from "./common/util.js";
export default class App {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;

    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();

    this.CAR_NAME_SUBMIT_BUTTON_ID = "car-names-submit";
    this.RACING_COUNT_SUBMIT_BUTTON_ID = "racing-count-submit";
    this.racingCountContainer = document.getElementById("racing-count-container");
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

  handleGame() {
    const game = new RacingCarGame(this.carNames, this.racingCount);
    const races = game.runAllRaces();
    const winners = game.getWinnerNames();

    const racesHTML = this.outputHandler.createRaceHTML(races);
    const winnersHTML = this.outputHandler.createWinnerHTML(winners);
    this.outputHandler.renderResultContainer(racesHTML + winnersHTML);
  }

  onClick(event) {
    const targetId = event.target.id;

    if (targetId === this.CAR_NAME_SUBMIT_BUTTON_ID) {
      this.submitCarNames();
    }

    if (targetId === this.RACING_COUNT_SUBMIT_BUTTON_ID) {
      this.submitRacingCount();
    }
  }
}

const app = new App();
document.addEventListener("click", (event) => app.onClick(event));
