import RacingWinners from "./RacingWinners.js";

const ResultContainer = ({ app, carNames, racingCount }) => {
  let resultContainer = document.querySelector("#result-container");
  let maxMoveCount = 0;

  const resetUI = () => {
    if (resultContainer) app.removeChild(resultContainer);
  };

  const init = () => {
    resetUI();

    resultContainer = document.createElement("div");
    resultContainer.setAttribute("id", "result-container");
    app.append(resultContainer);
  };

  const isMove = (randomNumber) => randomNumber >= 4;

  const roundRender = () => {
    let items = ``;

    for (let car of carNames) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

      if (isMove(randomNumber)) car.moveCount++;
      maxMoveCount = Math.max(maxMoveCount, car.moveCount);

      const { name, moveCount } = car;
      items += `<p style="margin: 0;">${name}: ${"-".repeat(moveCount)}</p>`;
    }

    return items;
  };

  const render = () => {
    for (let round = 0; round < racingCount; round++) {
      resultContainer.innerHTML += `<div id="result-round" style="margin: 10px 0;">${roundRender()}</div>`;
    }
    resultContainer.innerHTML += RacingWinners({ carNames, maxMoveCount });
  };

  init();
  render();
};

export default ResultContainer;
