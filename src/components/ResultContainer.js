const ResultContainer = ({ app, carNames, racingCount }) => {
  const resultContainer = document.createElement("div");
  resultContainer.setAttribute("id", "result-container");
  app.append(resultContainer);

  let maxMoveCount = 0;

  //   console.log(MissionUtils.Random.pickNumberInRange(0, 9));
  console.log(carNames, racingCount);

  const isMove = (randomNumber) => randomNumber >= 4;

  for (let i = 0; i < racingCount; i++) {
    let div1 = `<div style="margin: 10px 0;">`;

    for (let car of carNames) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

      if (isMove(randomNumber)) car.moveCount++;

      maxMoveCount = Math.max(maxMoveCount, car.moveCount);
      div1 += `<p style="margin: 0;">${car.name}: ${"-".repeat(
        car.moveCount
      )}</p>`;
    }
    div1 += `</div>`;
    resultContainer.innerHTML += div1;
  }

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
