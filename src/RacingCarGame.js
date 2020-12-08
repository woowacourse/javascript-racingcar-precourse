import { Car } from "./Car.js";
import {
  isValidCarNamesInput,
  isValidRacingCount,
  getWinners
} from "./util.js";

export class RacingCarGame {
  constructor() {
    this.initializeVariables();
    this.selectDOMNode();
    this.addEventListeners();
  }

  initializeVariables() {
    this.state = {
      roundResult: [],
      winners: []
    };
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
    this.$carGameResult = document.querySelector(".car-game-result");
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

    if (isValidCarNamesInput(carNamesInput)) {
      this.showRacingCountContainer();
      this.disableCarNamesNodes();
      this.cars = carNamesInput.split(",").map(carName => carName.trim()).map(carName => new Car(carName));
      console.log(carNamesInput.split(",").map(carName => carName.trim()));
    } else {
      alert(`${carNamesInput}은 유효하지 않은 입력입니다. 재입력해주세요`);
      this.clearInput(this.$carNamesInput);
    }
  }

  showRacingCountContainer() {
    this.$racingCountContainer.classList.remove("--hidden");
    this.$racingCountInput.focus();
  }

  disableCarNamesNodes() {
    this.$carNamesInput.disabled = true;
    this.$carNamesSubmit.disabled = true;
  }

  clearInput($target) {
    $target.value = "";
    $target.focus();
  }

  onKeydownRacingCountInput(e) {
    if (e.key === "Enter") {
      this.onClickRacingCountSubmit();
    }
  }

  onClickRacingCountSubmit() {
    const racingCountNumber = Number(this.$racingCountInput.value);
    console.log(`시도할 횟수: ${racingCountNumber}`);

    if (isValidRacingCount(racingCountNumber)) {
      this.disableRacingCountNodes();
      this.showCarGameResultContainer();
      this.racingCountNumber = racingCountNumber;
      this.race();
    } else {
      alert(`${racingCountNumber}는 유효한 횟수가 아닙니다. 재입력해주세요.`);
      this.clearInput(this.$racingCountInput);
    }
  }

  disableRacingCountNodes() {
    this.$racingCountInput.disabled = true;
    this.$racingCountSubmit.disabled = true;
  }

  showCarGameResultContainer() {
    this.$carGameResultContainer.classList.remove("--hidden");
  }

  race() {
    for (let i = 0; i < this.racingCountNumber; i++) {
      this.raceRound();
    }

    const winners = getWinners(this.cars);
    this.setState({ winners });
    this.render();
  }

  raceRound() {
    this.cars.filter(car => car.canMoveForward()).forEach(car => car.move());

    this.setState({
      roundResult: [
        ...this.state.roundResult,
        [...this.cars]
      ]
    });
  }

  setState(state) {
    this.state = {
      ...this.state,
      ...state
    };
  }

  render() {  
    const { roundResult, winners } = this.state;
    console.log(this.state);
    this.$carGameResult.innerHTML = roundResult.map(cars => this.getResultHTML(cars)).join("<br>");

    this.$carGameResult.innerHTML += `
      <br>
      <div>
        최종우승자: ${winners.map(car => car.getName()).join(", ")}
      <div>
    `;
  }

  getResultHTML(cars) {

    return cars.map(car => `<div>${car.getCurrentStateHTML()}</div>`).join("");
  }
}
