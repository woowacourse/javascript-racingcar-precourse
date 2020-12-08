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

export { hideRacingCount, hideResult, showRacingCount, showResult, drawResult };
