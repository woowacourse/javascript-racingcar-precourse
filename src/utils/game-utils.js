import { state } from "../index.js";

export function judgeWinner() {
  const winnerArray = [];
  let winnerPosition = 0;

  for (let i = 0; i < state.carArray.length; i++) {
    if (winnerPosition <= state.carArray[i].position) {
      winnerPosition = state.carArray[i].position;
    }
  }

  for (let i = 0; i < state.carArray.length; i++) {
    if (state.carArray[i].position === winnerPosition) {
      winnerArray.push(state.carArray[i].name);
    }
  }

  return winnerArray;
}
