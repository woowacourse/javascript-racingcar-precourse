import { isValidNames } from "../utils/validations.js";
import { Car } from "../classes/Car.js";

export class CarNamesInput {
  constructor({ setCars }) {
    this.initializeDOM();
    this.initializeEvents();
    this.setCars = setCars;
  }

  initializeDOM() {
    this.carNamesInput = document.getElementById("car-names-input");
    this.carNamesSubmit = document.getElementById("car-names-submit");
  }

  initializeEvents() {
    this.carNamesSubmit.addEventListener("click", this.handleCarNamesInput);
  }

  handleCarNamesInput() {
    let names = this.getNamesFromInput();

    if (!isValidNames(names)) {
      return;
    }

    let cars = this.makeCars();
    this.setCars(cars);
  }

  getNamesFromInput() {
    names = carNamesInput.value.split(",").map((name) => name.trim());

    return names;
  }

  makeCars(names) {
    let cars = [];

    names.forEach((name) => {
      cars.push(new Car(name));
    });

    return cars;
  }
}
