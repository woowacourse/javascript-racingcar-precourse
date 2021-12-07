import { $ } from "../common/const.js";

function getWinnerList(Cars) {
  let maxCount = -1e9;
  const winnerList = [];

  Cars.forEach((car) => {
    if (maxCount <= car.currentCount) {
      maxCount = car.currentCount;
    }
  });

  Cars.forEach((car) => {
    if (maxCount === car.currentCount) {
      winnerList.push(car.name);
    }
  });

  return winnerList.join(", ");
}

export function appendBr() {
  const $result = $("result-div");
  const br = document.createElement("br");
  $result.appendChild(br);
}

export function showWinners(Cars) {
  const $result = $("result-div");
  const $div = document.createElement("div");
  $result.appendChild($div);
  $div.innerText = "최종 우승자:";

  const $span = document.createElement("span");
  $span.id = "racing-winners";
  $div.appendChild($span);

  $span.innerHTML = `${getWinnerList(Cars)}`;
  $result.appendChild($span);
}

export function showResult(car) {
  const $result = $("result-div");
  const $p = document.createElement("p");
  $p.innerHTML = `${car.name}: ${car.showRunning()}`;
  $result.appendChild($p);
}
