function hideRacingCount() {
  const $divRacingCount = document.getElementById("racing-count-div");
  $divRacingCount.style.display = "none";
}

function hideResult() {
  const $divResult = document.getElementById("result-div");
  $divResult.style.display = "none";
}

function showRacingCount() {
  const $divRacingCount = document.getElementById("racing-count-div");
  $divRacingCount.style.display = "block";
}

function drawResultHeader() {
  const $divResult = document.getElementById("result-div");
  $divResult.innerHTML = `<h4>📄 실행 결과</h4>`;
}

function showResult() {
  const $divResult = document.getElementById("result-div");
  $divResult.style.display = "block";
}

function drawResult(carList) {
  const $divResult = document.getElementById("result-div");
  carList.forEach(({ name, count }) => {
    const $divInfo = document.createElement("div");
    $divInfo.innerHTML = `${name}: ${"-".repeat(count)}<br>`;
    $divResult.appendChild($divInfo);
  });
  const brEnd = document.createElement("br");
  $divResult.appendChild(brEnd);
}

function finalResult(winnerList) {
  const $divResult = document.getElementById("result-div");
  const winnerNames = winnerList.map(({ name }) => name).join(", ");
  const $divWinnerList = document.createElement("div");
  $divWinnerList.innerHTML = `최종우승자 : ${winnerNames}`;
  $divResult.appendChild($divWinnerList);
}
export { hideRacingCount, hideResult, showRacingCount, drawResultHeader, showResult, drawResult, finalResult };
