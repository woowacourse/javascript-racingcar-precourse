// export default function RacingCarGame() {
// }

export default class RacingCarGame {
  constructor() {
    this.initContainer();
    this.initEvent();
    this.cars = [];
  }

  initContainer() {
    this.racingCountContainer = document.getElementById("racing-count-container");
    this.racingResultContainer = document.getElementById("racing-count-container");
    this.carGameContainer = document.getElementById("car-game-container");
    this.carNamesInput = document.getElementById("car-names-input");
    this.racingCountInput = document.getElementById("racing-count-input");

    this.racingCountContainer.style.display = none;
    this.racingResultContainer.style.display = none;
  }

  initEvent() {
    this.carGameContainer.addEventListener("click", e => {
      switch (e.target.id) {
        case "car-names-submit":
          break;
        case "racing-count-submit":
          break;
        default:
          break;
      }
    });
  }

  _validateCarNames(input) {
    const stringArr = input.split("");
    const unvalidatedStringArr = stringArr.filter(str => {
      const trimedStr = str.trim();
      return trimedStr.length > 5;
    });
    if (unvalidatedStringArr.length > 0) {
      let errorStr = "";
      unvalidatedStringArr.forEach(str => (errorStr += `다음 입력값은 올바르지 않습니다. ${str}\n`));
      this._showErrorAlert(errorStr);
      this._initValueAndFoucsIn("names");
    }
  }

  _showErrorAlert(str) {
    alert(str);
  }
}

new RacingCarGame();
