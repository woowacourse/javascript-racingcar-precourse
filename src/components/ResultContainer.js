const ResultContainer = ({ app, carNames, racingCount }) => {
  const resultContainer = document.createElement("div");
  resultContainer.setAttribute("id", "result-container");
  app.append(resultContainer);
  let maxMoveCount = 0;

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
  };

  render();

  console.log(maxMoveCount);
  console.log(carNames);

  const winners = carNames
    .filter((car) => car.moveCount === maxMoveCount)
    .map((car) => car.name)
    .join(",");
  console.log(winners);

  resultContainer.innerHTML += `<div>
        <span>최종 우승자: </span>
        <span id="racing-winners">${winners}</span>
    </div>`;
};

export default ResultContainer;
