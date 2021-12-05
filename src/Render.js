export default class Render {
  constructor() {
    this.racingCountForm = document.getElementById("racing-count-form");
    this.racingCountText = document.getElementById("racing-count-label");
    this.resultText = document.getElementById("result");
    this.content = document.getElementById("app");
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

  showRoundResult(cars) {
    this.showResultText();
    this.makeRoundResult(cars);
  }

  makeRoundResult(cars) {
    const roundResultArea = document.createElement("p");
    cars.forEach(car => {
      const { name, progress } = car.getRacingResult();
      const roundResult = document.createElement("div");
      roundResult.innerText = `${name}: ${progress}`;
      roundResultArea.appendChild(roundResult);
    });
    this.content.append(roundResultArea);
  }
}
