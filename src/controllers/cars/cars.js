import { alertForCarNames } from "../../views/carNames/alertForCarNames.js";
import { resetCarNamesInput } from "../../views/carNames/resetCarNamesInput.js";
import VisiblePartOfRacingCount from "../../views/racingCount/visiblePartOfRacingCount.js";
import { isValidCarNames } from "./checkCarNames.js";

export default class Cars {
  constructor() {
    this.cars = [];
    this.$carNamesInput = document.getElementById("car-names-input");
    this.$carNamesSubmitButton = document.getElementById("car-names-submit");
    this.partOfRacingCount = new VisiblePartOfRacingCount();
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
        this.setCars(carNamesStr);
        this.partOfRacingCount.show();
      } else {
        alertForCarNames();
        resetCarNamesInput();
      }
    });
  }

  setCars(carNamesStr) {
    const carName = carNamesStr.split(",");

    this.cars = carName;
  }
}
