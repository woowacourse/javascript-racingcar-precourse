import { state, resultContainer } from "./index.js";
import { judgeWinner } from "./utils/game-utils.js";

export function printProgress(carNameArray) {
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

export function printFinalResult(racingCount) {
  const resultHeader = resultContainer.innerHTML;
  const carArray = state.carArray;
  const progressHTML = [];
  let finalHTML = "";
  let gameProgress = "";

  for (let i = 0; i < racingCount; i++) {
    for (let n = 0; n < carArray.length; n++) {
      if (carArray[n].canMove()) {
        carArray[n].move();
      }
    }

    gameProgress = printProgress(carArray);
    progressHTML.push(gameProgress.join(" "));
  }

  finalHTML = progressHTML.join(" ");
  document.getElementById("result").innerHTML = resultHeader + finalHTML;

  const winnerArray = judgeWinner();
  printWinner(winnerArray);
}
