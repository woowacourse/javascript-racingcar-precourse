import RacingCarGame from "./game.js";
import {
  validateInputsLength,
  validateInputsUnique,
  validateNaturalNumber,
} from "./common/validate.js";
import { trimStringSpace, convertStringToArray, convertStringToNumber } from "./common/util.js";

export default class App {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;

    this.carNameInputField = document.getElementById("car-names-input");
    this.carNameSubmitButton = document.getElementById("car-names-submit");

    this.racingCountInputField = document.getElementById("racing-count-input");
    this.racingCountSubmitButton = document.getElementById("racing-count-submit");
    this.racingCountContainer = document.getElementById("racing-count-container");

    this.gameResultContainer = document.getElementById("game-result-container");
  }

  getCarNamesInput() {
    const carNamesInput = this.carNameInputField.value;
    return carNamesInput;
  }

  parseCarNames(carNamesInput) {
    const carNamesString = trimStringSpace(carNamesInput); // 공백제거
    const carNames = convertStringToArray(carNamesString);
    return carNames;
  }

  validateCarNames(carNames) {
    const isValidLength = validateInputsLength(carNames);
    const isUnique = validateInputsUnique(carNames);
    const isValid = isValidLength && isUnique;

    if (!isValidLength) {
      alert("자동차 이름은 한 글자 이상 다섯 글자 이하여야 합니다.");
      return;
    }

    if (!isUnique) {
      alert("자동차 이름은 중복될 수 없습니다.");
    }

    return isValid;
  }

  displayRacingCountContainer() {
    this.racingCountContainer.style.display = "block";
  }

  getRacingCountInput() {
    const racingCountInput = this.racingCountInputField.value;
    return racingCountInput;
  }

  validateRacingCount(number) {
    const isValidNumber = validateNaturalNumber(number);
    if (!isValidNumber) {
      alert("1이상의 자연수만 입력할 수 있습니다.");
    }

    return isValidNumber;
  }

  submitCarNames() {
    const carNamesInput = this.getCarNamesInput();
    const carNames = this.parseCarNames(carNamesInput);
    const isValidCarNames = this.validateCarNames(carNames);

    if (!isValidCarNames) {
      return;
    }

    this.carNames = carNames;
    this.displayRacingCountContainer();
  }

  submitRacingCount() {
    const racingCountInput = this.getRacingCountInput();
    const racingCount = convertStringToNumber(racingCountInput);
    const isValidRacingCount = this.validateRacingCount(racingCount);

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
