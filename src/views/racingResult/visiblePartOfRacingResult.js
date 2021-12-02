class VisiblePartOfRacingResult {
  constructor() {
    this.$racingResultTitle = document.getElementById("racing-result-subtitle");
  }

  show() {
    this.$racingResultTitle.style.display = "";
  }

  hide() {
    this.$racingResultTitle.style.display = "none";
  }
}

export default VisiblePartOfRacingResult;
