import { alertForCarNames } from "../../views/carNames/alertForCarNames.js";
import { resetCarNamesInput } from "../../views/carNames/resetCarNamesInput.js";
import { isValidCarNames } from "./checkCarNames.js";

export default class Cars {
  constructor() {
    this.cars = [];
    this.$carNamesInput = document.getElementById("car-names-input");
    this.$carNamesSubmitButton = document.getElementById("car-names-submit");
    this.addEventHandlers();
  }

  addEventHandlers() {
    this.onClickCarNamesSubmitButton();
  }

  onClickCarNamesSubmitButton() {
    this.$carNamesSubmitButton.addEventListener("click", e => {
      e.preventDefault();

      const carNamesStr = this.$carNamesInput.value;

      if (isValidCarNames(carNamesStr)) {
        // 자동차 생성
      } else {
        alertForCarNames();
        resetCarNamesInput();
      }
    });
  }
}
