import Car from "./Car/Car.js";
import { DOMS } from "./util/constant.js";

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
    return carNames.some((carName) => carName.length > 5);
  };

  hasSpace = (carNames) => {
    return carNames.some((carName) => carName.match(/[" "]/));
  };

  createCarNameAlertMessage = (carNames) => {
    if (this.isDuplicatedCarName(carNames)) {
      return "이름이 중복되었습니다";
    }
    if (this.hasEmpty(carNames)) {
      return "이름은 공백이 될수 없습니다";
    }
    if (this.isInvalidCarNameLength(carNames)) {
      return "이름은 5글자이하로 입력해주세요";
    }
    if (this.hasSpace(carNames)) {
      return "이름에 공백이 포함되서는 안됩니다";
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
    return racingCount <= 0;
  };

  createRacingCountAlertMessage = (racingCount) => {
    if (this.isUnderZero(racingCount)) {
      return "1이상의 숫자를 입력해주세요";
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
      <span>최종우승자: </span>
      <span id = "racing-winners">${winners.join(", ")}</span>
    `;
  };

  printWinner = () => {
    const winners = this.getWinner();
    const winnerMessage = this.generateWinnerMessage(winners);
    DOMS.$app.insertAdjacentHTML("beforeend", winnerMessage);
  };

  resetResult = () => {
    const $gameProcesses = document.querySelectorAll(".game-process");
    const $racingWinners = document.querySelector("#racing-winners");

    if ($gameProcesses.length === 0) {
      return;
    }
    $gameProcesses.forEach((gameProcess) => gameProcess.remove());
    $racingWinners.remove();
    this.cars.forEach((car) => car.reset());
  };
}

new RacingCarGame();
