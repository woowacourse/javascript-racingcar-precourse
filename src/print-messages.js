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
