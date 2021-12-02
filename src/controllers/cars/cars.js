import { isValidCarNames } from "./checkCarNames.js";
import { makeRacingCars } from "./makeRacingCars.js";

import { alertForCarNames } from "../../views/carNames/alertForCarNames.js";
import {
  resetCarNamesInput,
  lockCarNamesInput,
} from "../../views/carNames/carNamesInput.js";
import VisiblePartOfRacingCount from "../../views/racingCount/visiblePartOfRacingCount.js";

class Cars {
  constructor() {
    this.cars = [];
    this.$carNamesInput = document.getElementById("car-names-input");
    this.$carNamesSubmit = document.getElementById("car-names-submit");
    this.addEventHandlers();
  }

  addEventHandlers() {
    this.onClickCarNamesSubmit();
  }

  onClickCarNamesSubmit() {
    this.$carNamesSubmit.addEventListener("click", e => {
      e.preventDefault();
      const carNamesStr = this.$carNamesInput.value;

      if (isValidCarNames(carNamesStr)) {
        this.setCars(makeRacingCars(carNamesStr));
        lockCarNamesInput();
        new VisiblePartOfRacingCount().show();
      } else {
        alertForCarNames();
        resetCarNamesInput();
      }
    });
  }

  getCars() {
    return this.cars;
  }

  setCars(cars) {
    this.cars = cars;
  }
}

export default Cars;
