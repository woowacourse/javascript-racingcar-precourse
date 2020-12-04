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
    const inputCarNames = this.carNamesInput.value.split(",");

    if (!isCorrectCarNames(inputCarNames)) {
      alert("잘못된 입력값 입니다");
      this.carNamesInput.value = "";
      return;
    }

    this._visiable();
    this.isHiddenRacingCountDiv = false;
  }
}
