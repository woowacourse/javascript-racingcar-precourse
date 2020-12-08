import { hideRacingCount, hideResult, showRacingCount, showResult } from "./htmlChange.js";
import { carNamesCheck, isNumber, isCarMoved } from "./utils.js";
import Car from "./Car.js";

export default class RacingCarGame {
  constructor() {
    this.carList = [];
    this.racingCount = 0;
    this.init();
  }
  init() {
    hideRacingCount();
    hideResult();
    this.setBtnCarNamesSubmit();
    this.setBtnRacingCountSubmit();
  }
  setBtnCarNamesSubmit() {
    const $BtnCarNamesSubmit = document.getElementById("car-names-submit");
    $BtnCarNamesSubmit.addEventListener("click", () => this.getInputCarNames());
  }
  setBtnRacingCountSubmit() {
    const $BtnRacingCountSubmit = document.getElementById("racing-count-submit");
    $BtnRacingCountSubmit.addEventListener("click", () => this.getInputRacingCount());
  }
  getInputCarNames() {
    const $InputCarNames = document.getElementById("car-names-input");
    const carNameList = $InputCarNames.value.split(",");
    if (!carNamesCheck(carNameList)) {
      alert("차 이름이 제대로 입력되었는지 확인해주세요.");
      return;
    }
    const carInstanceList = carNameList.map((carName) => new Car(carName));
    this.carList = carInstanceList;
    showRacingCount();
  }
  getInputRacingCount() {
    const $InputRacingCount = document.getElementById("racing-count-input");
    const racingCount = $InputRacingCount.value;
    if (!isNumber(racingCount)) {
      alert("숫자를 입력해주세요.");
      $InputRacingCount.value = "";
      return;
    }
    this.racingCount = racingCount;
  }
}

new RacingCarGame();
