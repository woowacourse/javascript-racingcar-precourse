import { Car } from "./Car.js";

export class RacingCarGame {
  constructor() {
    this.selectDOMNode();
    this.addEventListeners();
  }

  selectDOMNode() {
    this.$app = document.querySelector("#app");
    this.$carGameContainer = document.querySelector(".car-game-container");

    this.$carNamesContainer = document.querySelector(".car-names-container");
    this.$carNamesInput = document.querySelector("#car-names-input");
    this.$carNamesSubmit = document.querySelector("#car-names-submit");

    this.$racingCountContainer = document.querySelector(".racing-count-container");
    this.$racingCountInput = document.querySelector("#racing-count-input");
    this.$racingCountSubmit = document.querySelector("#racing-count-submit");
  }

  addEventListeners() {
    this.$carNamesInput.addEventListener("keydown",
      e => this.onKeydownCarNamesInput(e));
    this.$carNamesSubmit.addEventListener("click",
      () => this.onClickCarNamesSubmit());
  }

  onKeydownCarNamesInput(e) {
    if (e.key === "Enter") {
      this.onClickCarNamesSubmit();
    }
  }

  onClickCarNamesSubmit() {
    const carNamesInput = this.$carNamesInput.value;
    if (carNamesInput === "") return;

    if (this.isValidCarNamesInput(carNamesInput)) {
      this.showRacingCountContainer();
      this.disableCarNamesNodes();
      this.$racingCountInput.focus();
      this.cars = carNamesInput.split(",").map(carName => new Car(carName));
    } else {
      alert(`${carNamesInput}은 유효하지 않은 입력입니다. 재입력해주세요`);
      this.$carNamesInput.value = "";
      this.$carNamesInput.focus();
    }
  }

  isValidCarNamesInput(carNamesInput) {
    const MIN_CAR_NUMBER = 2;
    const MAX_CAR_NAME_LENGTH = 5;

    const carNames = carNamesInput.split(",");
    const hasMinCarNumbers =
      (carNames.length >= MIN_CAR_NUMBER);
    const isEveryCarNameLengthLessThanMaxLength =
      (carNames.every(carName => carName.length <= MAX_CAR_NAME_LENGTH));

    return hasMinCarNumbers && isEveryCarNameLengthLessThanMaxLength;
  }

  showRacingCountContainer() {
    this.$racingCountContainer.style.display = "block";
  }

  disableCarNamesNodes() {
    this.$carNamesInput.disabled = true;
    this.$carNamesSubmit.disabled = true;
  }
}
