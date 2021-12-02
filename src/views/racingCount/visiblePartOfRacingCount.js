class VisiblePartOfRacingCount {
  constructor() {
    this.$racingCountTitle = document.getElementById("racing-count-subtitle");
    this.$racingCountForm = document.getElementById("racing-count-form");
  }

  show() {
    this.$racingCountTitle.style.display = "";
    this.$racingCountForm.style.display = "";
  }

  hide() {
    this.$racingCountTitle.style.display = "none";
    this.$racingCountForm.style.display = "none";
  }
}

export default VisiblePartOfRacingCount;
