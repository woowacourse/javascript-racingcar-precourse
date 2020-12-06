export const provideResult = resultMessage => {
  const resultContainer = document.querySelector(".result-container");
  const racingResult = document.createElement("div");

  resultContainer.style.display = "block";
  racingResult.innerHTML = resultMessage;
  resultContainer.appendChild(racingResult);
};
