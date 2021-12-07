function findMaxCount(Cars) {
  let maxCount = -1e9;
  Cars.forEach((car) => {
    if (maxCount <= car.currentCount) {
      maxCount = car.currentCount;
    }
  });

  return maxCount;
}

export function appendBr() {
  const $result = document.getElementById("result-div");
  const br = document.createElement("br");
  $result.appendChild(br);
}

export function showWinners(Cars) {
  const $result = document.getElementById("result-div");
  const $div = document.createElement("div");
  $result.appendChild($div);
  $div.innerText = "최종 우승자:";

  const $span = document.createElement("span");
  $span.id = "racing-winners";
  $div.appendChild($span);

  const maxCount = findMaxCount(Cars);
  const winnerList = [];

  Cars.forEach((car) => {
    if (maxCount === car.currentCount) {
      winnerList.push(car.name);
    }
  });

  $span.innerHTML = `${winnerList.join(", ")}`;
  $result.appendChild($span);
}

export function showResult(car) {
  const $result = document.getElementById("result-div");
  const $p = document.createElement("p");
  $p.innerHTML = `${car.name}: ${car.showRunning()}`;
  $result.appendChild($p);
}
