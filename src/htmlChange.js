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
export { hideRacingCount, hideResult, showRacingCount, showResult };
