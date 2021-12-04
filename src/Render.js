export default class Render {
  constructor() {
    this.racingCountForm = document.getElementById("racing-count-form");
    this.racingCountText = document.getElementById("racing-count-label");
    this.resultText = document.getElementById("result");
  }

  hideRacingCountForm() {
    this.racingCountForm.style.display = "none";
    this.racingCountText.style.display = "none";
  }

  hideResultText() {
    this.resultText.style.display = "none";
  }

  showResultText() {
    this.resultText.style.display = "block";
  }

  showRacingCountForm() {
    this.racingCountForm.style.display = "block";
    this.racingCountText.style.display = "block";
  }
}
