export function printResult(winnerArr) {
  const resultRaceDiv = document.querySelector("#resultRaceDiv");
  const winners = document.createElement("p");
  winners.innerHTML = `최종 우승자: ${winnerArr.join(", ")}`;
  resultRaceDiv.appendChild(winners);
}
