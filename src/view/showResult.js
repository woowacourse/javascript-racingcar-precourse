function getWinnerList(carList) {
  const winnerList = [];
  let maxCount = -1e9;

  carList.forEach((car) => {
    if (maxCount <= car.currentCount) {
      maxCount = car.currentCount;
    }
  });

  carList.forEach((car) => {
    if (maxCount === car.currentCount) {
      winnerList.push(car.name);
    }
  });

  return winnerList.join(", ");
}

export function appendBr($resultDiv) {
  const br = document.createElement("br");

  $resultDiv.appendChild(br);
}

export function showWinners(carList, $resultDiv) {
  const $winnerTitle = document.createElement("span");
  const $racingWinners = document.createElement("span");
  $racingWinners.id = "racing-winners";

  $resultDiv.appendChild($winnerTitle);
  $resultDiv.appendChild($racingWinners);

  $winnerTitle.innerHTML = "최종 우승자: ";
  $racingWinners.innerHTML = `${getWinnerList(carList)}`;
}

export function showResult(car, $resultDiv) {
  const $racing = document.createElement("div");
  const { name } = car;

  $racing.innerHTML = `${name}: ${car.showRunning()}`;
  $resultDiv.appendChild($racing);
}
