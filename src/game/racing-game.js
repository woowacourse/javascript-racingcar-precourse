import Winner from "./winner.js";
import { DOMS } from "../util/constant.js";

export default class RacingCarGame {
  play = (cars, racingCount) => {
    this.resetResult(cars);
    for (let i = 0; i < racingCount; i++) {
      cars.forEach((car) => car.move());
      this.printGameProcess(cars);
    }
    this.printWinner(cars);
  };

  printGameProcess = (cars) => {
    const gameProcess =
      cars
        .map((car) => `<div>${car.name}: ${"-".repeat(car.distance)}</div>`)
        .join("") + "<br/>";

    const processWrapper = `<div class="game-process">${gameProcess}</div>`;
    DOMS.$app.insertAdjacentHTML("beforeend", processWrapper);
  };

  printWinner = (cars) => {
    const winners = new Winner(cars);
    DOMS.$app.insertAdjacentHTML("beforeend", winners.message);
  };

  resetResult = (cars) => {
    this.resetProcess();
    this.resetWinner();
    this.resetCarDistance(cars);
  };

  resetProcess = () => {
    const $gameProcesses = document.querySelectorAll(".game-process");
    if (!$gameProcesses.length) {
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

  resetCarDistance = (cars) => {
    cars.forEach((car) => car.reset());
  };
}
