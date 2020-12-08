import { hideRacingCount, hideResult } from "./initialState.js";
import { carNamesCheck } from "./utils.js";
import Car from "./Car.js";

export default class RacingCarGame {
  constructor() {
    this.init();
  }
  init() {
    hideRacingCount();
    hideResult();
    this.setBtnCarNamesSubmit();
  }
  setBtnCarNamesSubmit() {
    const $BtnCarNamesSubmit = document.getElementById("car-names-submit");
    $BtnCarNamesSubmit.addEventListener("click", () => this.getInputCarNames());
  }
  getInputCarNames() {
    const $InputCarNames = document.getElementById("car-names-input");
    const carNameList = $InputCarNames.value.split(",");
    if (!carNamesCheck(carNameList)) {
      alert("차 이름이 제대로 입력되었는지 확인해주세요.");
      return;
    }
    const carInstanceList = carNameList.map((carName) => new Car(carName));
    this.startGame(carInstanceList);
  }
  startGame(carList) {
    console.log(carList);
  }
}

new RacingCarGame();
