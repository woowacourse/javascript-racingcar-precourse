import { makeElement } from "./utils.js";

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
    this.racingResultArea = makeElement({
      tag: "div",
      id: "racing-result",
    });
    this.resultText.insertAdjacentElement("afterend", this.racingResultArea);
  }

  roundResult(cars) {
    const roundResultArea = makeElement({ tag: "p" });
    cars.forEach(car => {
      const { name, progress } = car.getRacingResult();
      const roundResult = makeElement({
        tag: "div",
        innerText: `${name}: ${progress}`,
      });
      roundResultArea.appendChild(roundResult);
    });
    this.racingResultArea.append(roundResultArea);
  }

  winner(name) {
    const winnerText = makeElement({
      tag: "span",
      innerText: `최종 우승자: `,
    });
    const winnerTag = makeElement({
      tag: "span",
      innerText: name,
      id: "racing-winners",
    });
    this.racingResultArea.append(winnerText, winnerTag);
  }

  makeReStartButton() {
    const reStartButton = makeElement({
      tag: "button",
      innerText: "게임 재시작",
    });
    this.racingResultArea.append(reStartButton);
    return reStartButton;
  }
}
