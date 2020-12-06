export const provideResult = resultMessage => {
  const resultContainer = document.querySelector(".result-container");
  const racingResult = document.createElement("div");

  resultContainer.style.display = "block";
  racingResult.innerHTML = resultMessage;
  resultContainer.appendChild(racingResult);
};

export const provideWinner = winners => {
  const resultContainer = document.querySelector(".result-container");
  const winner = document.createElement("span");

  winner.textContent = `최종우승자: ${winners.join(",")}`;
  resultContainer.appendChild(winner);
};
