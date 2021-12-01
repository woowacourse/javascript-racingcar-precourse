export default class VisiblePartOfRacingCount {
  constructor() {
    this.$racingCountSubtitle = document.getElementById("racing-count-subtitle");
    this.$racingCountForm = document.getElementById("racing-count-form");
  }

  show() {
    this.$racingCountSubtitle.style.display = "";
    this.$racingCountForm.style.display = "";
  }

  hide() {
    this.$racingCountSubtitle.style.display = "none";
    this.$racingCountForm.style.display = "none";
  }
}
