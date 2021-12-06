const formatWinnerLine = function formatWinnerLineFromArray(winners) {
  const winnerLine = document.createElement("p");
  winnerLine.textContent = "최종 우승자: ";

  // add winner names as span
  const winnerSpan = document.createElement("span");
  winnerSpan.id = "racing-winners";
  winnerSpan.textContent = winners.join(",");
  winnerLine.appendChild(winnerSpan);

  return winnerLine;
};

export default formatWinnerLine;
