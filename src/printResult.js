export function printResult(winnerArr) {
  const resultRaceDiv = document.querySelector("#resultRaceDiv");
  const winners = document.createElement("p");
  winners.innerHTML = "최종 우승자: ";
  winnerArr.forEach((v, index) => {
    if (index === 0) winners.innerHTML += `${v}`;
    else winners.innerHTML += `, ${v}`;
  });
  resultRaceDiv.appendChild(winners);
}
