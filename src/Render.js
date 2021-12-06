export default class Render {
  constructor() {
    this.racingCountForm = document.getElementById("racing-count-form");
    this.racingCountText = document.getElementById("racing-count-label");
    this.resultText = document.getElementById("game-result");
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

  clearRacingResult() {
    const prevRacingResult = document.querySelector("#racing-result");
    if (prevRacingResult) {
      prevRacingResult.remove();
    }
  }

  makeResultArea() {
    this.showResultText();
    this.racingResultArea = this.makeElement({
      tag: "div",
      id: "racing-result",
    });
    this.resultText.insertAdjacentElement("afterend", this.racingResultArea);
  }

  makeRoundResult(cars) {
    const roundResultArea = this.makeElement({ tag: "p" });
    cars.forEach(car => {
      const { name, progress } = car.getRacingResult();
      const roundResult = this.makeElement({
        tag: "div",
        innerText: `${name}: ${progress}`,
      });
      roundResultArea.appendChild(roundResult);
    });
    this.racingResultArea.append(roundResultArea);
  }

  winner(name) {
    const winnerText = this.makeElement({
      tag: "span",
      innerText: `최종 우승자: `,
    });
    const winnerTag = this.makeElement({
      tag: "span",
      innerText: name,
      id: "racing-winners",
    });
    this.racingResultArea.append(winnerText, winnerTag);
  }

  makeElement({ tag, innerText = "", id = "" }) {
    const element = document.createElement(tag);
    if (innerText) {
      element.innerText = innerText;
    }
    if (id) {
      element.id = id;
    }
    return element;
  }
}
