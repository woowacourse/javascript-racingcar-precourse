import Car from "./Car/Car.js";
import { ALERT_MESSAGE, DOMS } from "./util/constant.js";
import {
  isUnderZero,
  hasEmpty,
  hasSpace,
  isDuplicatedCarName,
  isInvalidCarNameLength,
} from "./util/check-valid.js";
import {
  permitRacingCountForm,
  blockRacingCountForm,
} from "./util/block-and-permit.js";

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.setEvent();
    blockRacingCountForm();
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
    permitRacingCountForm();
  };

  createCarNameAlertMessage = (carNames) => {
    if (isDuplicatedCarName(carNames)) {
      return ALERT_MESSAGE.DUPLICATED_NAME;
    }
    if (hasEmpty(carNames)) {
      return ALERT_MESSAGE.NO_EMPTY_NAME;
    }
    if (isInvalidCarNameLength(carNames)) {
      return ALERT_MESSAGE.NOT_OVER_FIVE_NAME;
    }
    if (hasSpace(carNames)) {
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

  createRacingCountAlertMessage = (racingCount) => {
    if (isUnderZero(racingCount)) {
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
    const maxDistance = this.getMaxDistance();

    return this.cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
  };

  getMaxDistance = () => {
    return this.cars.sort((a, b) => b.distance - a.distance)[0].distance;
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
