import Component from "../components/initialComponent.js";
import { isCorrectCarNames } from "../../utils/vaildValue.js";

export default class GetCarNames extends Component {
  constructor() {
    super();
    this.carNamesInput = document.querySelector("#car-names-input");
    this.carNamesBtn = document.querySelector("#car-names-submit");

    this.carNamesBtn.addEventListener(
      "click",
      this._onClickCarNames.bind(this)
    );
    this.isHiddenRacingCountDiv = true;
    this.inputCarNames = "";
  }

  _visiable() {
    try {
      if (!this.isHiddenRacingCountDiv) return;

      const target = document.querySelector(".js-hidden__div");
      target.classList.remove("js-hidden__div");
    } catch (e) {
      console.log(e);
    }
  }

  _onClickCarNames() {
    console.log(this.carNamesInput.value);
    this.inputCarNames = this.carNamesInput.value.split(",");

    if (!isCorrectCarNames(this.inputCarNames)) {
      alert("잘못된 입력값 입니다");
      return;
    }

    this._visiable();
    this.isHiddenRacingCountDiv = false;
  }
}
