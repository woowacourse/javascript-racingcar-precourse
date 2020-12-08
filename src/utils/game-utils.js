import { state } from "../index.js";

function judgeWinnerPosition() {
  let winnerPosition = 0;

  for (let i = 0; i < state.carArray.length; i++) {
    if (winnerPosition <= state.carArray[i].position) {
      winnerPosition = state.carArray[i].position;
    }
  }

  return winnerPosition;
}

export function judgeWinner() {
  const winnerArray = [];
  const winnerPosition = judgeWinnerPosition();

  for (let i = 0; i < state.carArray.length; i++) {
    if (state.carArray[i].position === winnerPosition) {
      winnerArray.push(state.carArray[i].name);
    }
  }

  return winnerArray;
}
