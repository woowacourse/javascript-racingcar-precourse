export function hideTags() {
  document.querySelector("#racing-count-input").style.visibility = "hidden";
  document.querySelector("#racing-count-submit").style.visibility = "hidden";
  document.querySelectorAll("h4")[0].style.visibility = "hidden";
  document.querySelectorAll("h4")[1].style.visibility = "hidden";
}
