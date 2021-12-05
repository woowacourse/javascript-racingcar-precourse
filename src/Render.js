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
    const roundResultArea = this.makeElement({ tag: "p" });
    cars.forEach(car => {
      const { name, progress } = car.getRacingResult();
      const roundResult = this.makeElement({
        tag: "div",
        innerText: `${name}: ${progress}`,
      });
      roundResultArea.appendChild(roundResult);
    });
    this.content.append(roundResultArea);
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
    this.content.append(winnerText, winnerTag);
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
