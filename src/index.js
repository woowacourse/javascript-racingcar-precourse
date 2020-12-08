import { hideRacingCount, hideResult } from "./initialState.js";
import { carNamesCheck } from "./utils.js";

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
    const InputCarNames = $InputCarNames.value;
    if (!carNamesCheck(InputCarNames)) {
      alert("차 이름이 제대로 입력되었는지 확인해주세요.");
      return;
    }
  }
}

new RacingCarGame();
