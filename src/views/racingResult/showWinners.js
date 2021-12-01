export const showWinners = (winners) => {
  const $br = document.createElement("br");
  document.body.appendChild($br);

  const $textWinner = document.createTextNode("최종 우승자: ");
  document.body.appendChild($textWinner);

  const $racingWinners = document.createElement("span");
  $racingWinners.id = "racing-winners";
  $racingWinners.innerHTML = winners.join(",");
  document.body.appendChild($racingWinners);
};
