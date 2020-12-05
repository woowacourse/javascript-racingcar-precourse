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

    this.$carGameResultContainer = document.querySelector(".car-game-result-container");
  }

  addEventListeners() {
    this.$carNamesInput.addEventListener("keydown",
      e => this.onKeydownCarNamesInput(e));
    this.$carNamesSubmit.addEventListener("click",
      () => this.onClickCarNamesSubmit());
    
    this.$racingCountInput.addEventListener("keydown",
      e => this.onKeydownRacingCountInput(e));
    this.$racingCountSubmit.addEventListener("click",
      () => this.onClickRacingCountSubmit());
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

  onKeydownRacingCountInput(e) {
    if (e.key === "Enter") {
      this.onClickRacingCountSubmit();
    }
  }

  onClickRacingCountSubmit() {
    const racingCountNumber = Number(this.$racingCountInput.value);
    console.log(`시도할 횟수: ${racingCountNumber}`);

    if (this.isValidRacingCount(racingCountNumber)) {
      this.disableRacingCountNodes();
      this.showCarGameResultContainer();
      this.racingCountNumber = racingCountNumber;
      this.play();
    } else {
      alert(`${racingCountNumber}는 유효한 횟수가 아닙니다. 재입력해주세요.`);
      this.$racingCountInput.value = "";
      this.$racingCountInput.focus();
    }
  }

  isValidRacingCount(racingCountNumber) {
    const MIN_COUNT = 0;
    
    return Number.isInteger(racingCountNumber) &&
      (racingCountNumber > MIN_COUNT);
  }

  disableRacingCountNodes() {
    this.$racingCountInput.disabled = true;
    this.$racingCountSubmit.disabled = true;
  }

  showCarGameResultContainer() {
    this.$carGameResultContainer.style.display = "block";
  }

  play() {
    //TODO: 🏎 play: 자동차 경주 게임을 시작
  }
}
