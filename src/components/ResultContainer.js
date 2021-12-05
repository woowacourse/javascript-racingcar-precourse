import RacingWinners from "./RacingWinners.js";
import ResultRound from "./ResultRound.js";

const ResultContainer = ({ app, data }) => {
  const { carNames, racingCount, winners } = data;
  let resultContainer = document.querySelector("#result-container");

  const reset = () => {
    if (resultContainer) app.removeChild(resultContainer);
  };

  const init = () => {
    reset();

    resultContainer = document.createElement("div");
    resultContainer.setAttribute("id", "result-container");
    app.append(resultContainer);
  };

  const render = (carNames, racingCount) => {
    for (let round = 0; round < racingCount; round++) {
      resultContainer.innerHTML += ResultRound(carNames, round);
    }

    resultContainer.innerHTML += RacingWinners({ winners });
  };

  init();
  render(carNames, racingCount);
};

export default ResultContainer;
