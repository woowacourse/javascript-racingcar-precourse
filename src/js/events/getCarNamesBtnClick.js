import Component from "../components/initialComponent.js";

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

      this.target = document.querySelector(".js-hidden__div");
      this.target.classList.remove("js-hidden__div");
    } catch (e) {
      console.log(e);
    }
  }

  _onClickCarNames() {
    console.log(this.carNamesInput.value);
    this._visiable();
    this.isHiddenRacingCountDiv = false;
  }
}
