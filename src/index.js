import Car from "./Car/Car.js";
import { ALERT_MESSAGE, DOMS } from "./util/constant.js";
import { VALID_NUMBER } from "./util/constant.js";

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.setEvent();
    this.blockRacingCountForm();
  }

  setEvent = () => {
    DOMS.$carNamesForm.addEventListener("submit", this.setCarNameSubmitEvent);
    DOMS.$racingCountForm.addEventListener(
      "submit",
      this.setRacingCountSubmitEvent
    );
  };

  setCarNameSubmitEvent = (event) => {
    event.preventDefault();
    const carNames = DOMS.$carNamesInput.value.split(",");
    const alertMessage = this.createCarNameAlertMessage(carNames);
    if (alertMessage) {
      alert(alertMessage);
      return;
    }
    this.cars = carNames.map((carName) => new Car(carName));
    this.permitRacingCountForm();
  };

  blockRacingCountForm = () => {
    DOMS.$racingCountInput.disabled = true;
    DOMS.$racingCountButton.disabled = true;
  };

  permitRacingCountForm = () => {
    DOMS.$racingCountInput.disabled = false;
    DOMS.$racingCountButton.disabled = false;
  };

  isDuplicatedCarName = (carNames) => {
    return [...new Set(carNames)].length !== carNames.length;
  };

  hasEmpty = (carNames) => {
    return carNames.some((carName) => carName === "");
  };

  isInvalidCarNameLength = (carNames) => {
    return carNames.some(
      (carName) => carName.length > VALID_NUMBER.CAR_NAME_LENGTH
    );
  };

  hasSpace = (carNames) => {
    return carNames.some((carName) => carName.match(/[" "]/));
  };

  createCarNameAlertMessage = (carNames) => {
    if (this.isDuplicatedCarName(carNames)) {
      return ALERT_MESSAGE.DUPLICATED_NAME;
    }
    if (this.hasEmpty(carNames)) {
      return ALERT_MESSAGE.NO_EMPTY_NAME;
    }
    if (this.isInvalidCarNameLength(carNames)) {
      return ALERT_MESSAGE.NOT_OVER_FIVE_NAME;
    }
    if (this.hasSpace(carNames)) {
      return ALERT_MESSAGE.NO_SPACE_IN_NAME;
    }

    return "";
  };

  setRacingCountSubmitEvent = (event) => {
    event.preventDefault();
    const racingCount = DOMS.$racingCountInput.value;
    const alertMessage = this.createRacingCountAlertMessage(racingCount);

    if (alertMessage) {
      alert(alertMessage);
      return;
    }
    this.play(racingCount);
  };

  isUnderZero = (racingCount) => {
    return racingCount <= VALID_NUMBER.RACING_COUNT;
  };

  createRacingCountAlertMessage = (racingCount) => {
    if (this.isUnderZero(racingCount)) {
      return ALERT_MESSAGE.OVER_ZERO;
    }

    return "";
  };

  play = (racingCount) => {
    this.resetResult();
    for (let i = 0; i < racingCount; i++) {
      this.cars.forEach((car) => car.move());
      this.printGameProcess();
    }
    this.printWinner();
  };

  printGameProcess = () => {
    const gameProcess =
      this.cars
        .map((car) => `<div>${car.name}: ${"-".repeat(car.distance)}</div>`)
        .join("") + "<br/>";

    const processWrapper = `<div class="game-process">${gameProcess}</div>`;
    DOMS.$app.insertAdjacentHTML("beforeend", processWrapper);
  };

  getWinner = () => {
    const maxLength = this.cars.sort((a, b) => b.distance - a.distance)[0]
      .distance;

    return this.cars
      .filter((car) => car.distance === maxLength)
      .map((car) => car.name);
  };

  generateWinnerMessage = (winners) => {
    return `
      <div>최종우승자:
        <span id = "racing-winners">${winners.join(", ")}</span>
      </div>
    `;
  };

  printWinner = () => {
    const winners = this.getWinner();
    const winnerMessage = this.generateWinnerMessage(winners);
    DOMS.$app.insertAdjacentHTML("beforeend", winnerMessage);
  };

  resetResult = () => {
    this.resetProcess();
    this.resetWinner();
    this.resetCarDistance();
  };

  resetProcess = () => {
    const $gameProcesses = document.querySelectorAll(".game-process");
    if ($gameProcesses.length === 0) {
      return;
    }
    $gameProcesses.forEach((gameProcess) => gameProcess.remove());
  };

  resetWinner = () => {
    const $racingWinners = document
      .querySelector("#racing-winners")
      ?.closest("div");
    if (!$racingWinners) {
      return;
    }
    $racingWinners.remove();
  };

  resetCarDistance = () => {
    this.cars.forEach((car) => car.reset());
  };
}

new RacingCarGame();
