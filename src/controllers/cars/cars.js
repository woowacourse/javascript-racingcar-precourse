import { isValidCarNames } from "./checkCarNames.js";
import { makeRacingCars } from "./makeRacingCars.js";
import { getValueById } from "../../utils/getElementThings.js";

import { alertForCarNames } from "../../views/carNames/alertForCarNames.js";
import { lockInputById, resetValueById } from "../../views/common/inputs.js";
import VisiblePartOfRacingCount from "../../views/racingCount/visiblePartOfRacingCount.js";

class Cars {
  constructor() {
    this.cars = [];
    this.inputId = "car-names-input";
    this.$carNamesSubmit = document.getElementById("car-names-submit");
    this.addEventHandlers();
  }

  addEventHandlers() {
    this.onClickCarNamesSubmit();
  }

  onClickCarNamesSubmit() {
    this.$carNamesSubmit.addEventListener("click", e => {
      e.preventDefault();
      const carNamesStr = getValueById(this.inputId);

      if (isValidCarNames(carNamesStr)) {
        this.setCars(makeRacingCars(carNamesStr));
        lockInputById(this.inputId);
        new VisiblePartOfRacingCount().show();
      } else {
        alertForCarNames();
        resetValueById(this.inputId);
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
