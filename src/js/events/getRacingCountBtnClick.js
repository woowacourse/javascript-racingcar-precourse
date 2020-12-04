import GetCarNames from "../events/getCarNamesBtnClick.js";
import { isCorrectRacingCount } from "../../utils/vaildValue.js";

export default class GetRacingCount extends GetCarNames {
  constructor() {
    super();
    this.racingCountInput = document.querySelector("#racing-count-input");
    this.racingCountBtn = document.querySelector("#racing-count-submit");

    this.racingCountBtn.addEventListener(
      "click",
      this._onClickRacingCount.bind(this)
    );
  }

  _onClickRacingCount() {
    this.inputRacingCount = this.racingCountInput.value;

    if (!isCorrectRacingCount(this.inputRacingCount)) {
      alert("1이상의 올바른 횟수값을 입력해 주세요");
      this.racingCountInput.value = "";
      return;
    }
  }
}
