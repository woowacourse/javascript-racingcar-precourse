import { state, resultContainer } from "./index.js";
import { judgeWinner } from "./utils/game-utils.js";

let PROGRESS = "";

export function printProgress(carNameArray) {
  for (let i = 0; i < carNameArray.length; i++) {
    PROGRESS += `${carNameArray[i].name}: `;

    for (let a = 0; a < carNameArray[i].position; a++) {
      PROGRESS += `-`;
    }
    PROGRESS += `<br />`;
  }
  PROGRESS += `<br />`;

  return PROGRESS;
}

export function printWinner(winnerArray) {
  let result = "최종 우승자: ";
  let winnerString = "";

  if (winnerArray.length > 1) {
    winnerString = winnerArray.join(", ");
  } else {
    winnerString = winnerArray;
  }

  result += winnerString;
  document.getElementById("result").innerHTML += result;
}

export function printFinalResult(racingCount) {
  const resultHeader = resultContainer.innerHTML;
  const carArray = state.carArray;
  let gameProgress = "";

  for (let i = 0; i < racingCount; i++) {
    for (let n = 0; n < carArray.length; n++) {
      if (carArray[n].canMove()) {
        carArray[n].move();
      }
    }
    gameProgress = printProgress(carArray);
  }

  document.getElementById("result").innerHTML = resultHeader + gameProgress;
  const winnerArray = judgeWinner();
  printWinner(winnerArray);
}
