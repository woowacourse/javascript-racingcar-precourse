function hideRacingCount() {
  const $divRacingCount = document.getElementById("racing-count-div");
  console.log($divRacingCount);
  $divRacingCount.style.display = "none";
}

function hideResult() {
  const $divResult = document.getElementById("result-div");
  $divResult.style.display = "none";
}

export { hideRacingCount, hideResult };
