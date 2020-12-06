export function hideTags() {
  document.querySelector("#racing-count-input").style.visibility = "hidden";
  document.querySelector("#racing-count-submit").style.visibility = "hidden";
  document.querySelectorAll("h4")[0].style.visibility = "hidden";
  document.querySelectorAll("h4")[1].style.visibility = "hidden";
}

export function showCountTags() {
  document.querySelector("#racing-count-submit").style.visibility = "visible";
  document.querySelector("#racing-count-input").style.visibility = "visible";
  document.querySelectorAll("h4")[0].style.visibility = "visible";
}

export function clearResultDiv() {
  const resultDiv = document.querySelector("#app").childNodes[7];
  let raceResult = document.querySelector("#resultRaceDiv");
  if (raceResult != null) {
    resultDiv.removeChild(raceResult);
  }
  raceResult = document.createElement("div");
  raceResult.setAttribute("id", "resultRaceDiv");
  resultDiv.appendChild(raceResult);
}

export function showResultTags() {
  document.querySelectorAll("h4")[1].style.visibility = "visible";
}
