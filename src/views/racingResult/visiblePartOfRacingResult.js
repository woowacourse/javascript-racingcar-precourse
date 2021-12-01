export default class VisiblePartOfRacingResult {
  constructor() {
    this.$racingResultSubtitle = document.getElementById("racing-result-subtitle");
  }

  show() {
    this.$racingResultSubtitle.style.display = "";
  }

  hide() {
    this.$racingResultSubtitle.style.display = "none";
  }
}
