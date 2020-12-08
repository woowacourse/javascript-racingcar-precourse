import { state, resultContainer } from "./index.js";
import { judgeWinner } from "./utils/game-utils.js";

export function printProgressPerCar(carNameArray) {
  const progress = [];
  const enterHTML = "<br />";

  for (const car of carNameArray) {
    progress.push(`${car.name}: `);

    for (let i = 0; i < car.position; i++) {
      progress.push("-");
    }
    progress.push(enterHTML);
  }
  progress.push(enterHTML);

  return progress;
}

export function printWinner(winnerArray) {
  const winnerString = winnerArray.join(", ");
  const result = `최종우승자: ${winnerString}`;

  document.getElementById("result").innerHTML += result;
}

export function printOneGameResult() {
  const carArray = state.carArray;
  let gameProgressPerGameHTML = "";

  for (const car of carArray) {
    if (car.canMove()) {
      car.move();
    }
  }

  gameProgressPerGameHTML = printProgressPerCar(carArray).join(" ");

  return gameProgressPerGameHTML;
}

export function printFinalResult(racingCount) {
  const resultHeader = resultContainer.innerHTML;
  const progressPerGameArr = [];
  let finalHTML = "";

  for (let i = 0; i < racingCount; i++) {
    const oneGame = printOneGameResult();

    progressPerGameArr.push(oneGame);
  }

  finalHTML = progressPerGameArr.join(" ");
  document.getElementById("result").innerHTML = resultHeader + finalHTML;

  const winnerArray = judgeWinner();
  printWinner(winnerArray);
}
