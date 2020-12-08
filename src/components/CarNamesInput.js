import { isValidNames } from "../utils/validations.js";
import { Car } from "../classes/Car.js";
import { setDisable } from "../utils/handleDom.js";

export class CarNamesInput {
  constructor({ setCars }) {
    this.initializeDOM();
    this.initializeEvents();
    this.setCars = setCars;
  }

  initializeDOM = () => {
    this.carNamesInput = document.getElementById("car-names-input");
    this.carNamesSubmit = document.getElementById("car-names-submit");
  };

  initializeEvents = () => {
    this.carNamesSubmit.addEventListener("click", () => {
      this.handleCarNamesInput();
    });
  };

  handleCarNamesInput = () => {
    let names = this.getNamesFromInput();
    if (!isValidNames(names)) {
      return;
    }

    let cars = this.makeCars(names);
    this.setCars(cars);

    setDisable(this.carNamesInput, "disable");
    setDisable(this.carNamesSubmit, "disable");
  };

  getNamesFromInput = () => {
    return this.carNamesInput.value.split(",").map((name) => name.trim());
  };

  makeCars = (names) => {
    let cars = [];

    names.forEach((name) => {
      cars.push(new Car(name));
    });

    return cars;
  };
}
