import Car from "./car.js";
import Render from "./render.js";
import Util from "./util.js";

export default class RacingCarGame {
  util = new Util();
  render = new Render();

  constructor() {
    this.init();
    this.submitNames();
  }

  init = () => {
    const countForm = document.querySelector(".racing-count-form");
    const resultContainer = document.querySelector(".result-container");

    countForm.style.display = "none";
    resultContainer.style.display = "none";
  };

  submitNames = () => {
    const submitButton = document.querySelector("#car-names-submit");

    submitButton.addEventListener("click", this.onClick);
  };

  onClick = event => {
    const target = event.target.id;

    if (target === "car-names-submit") {
      this.setCars();
    }
    if (target === "racing-count-submit") {
      this.runRace();
    }
  };

  setCars = () => {
    const namesInput = document.querySelector("#car-names-input");
    let names;

    if (!this.util.checkValidation(namesInput)) {
      this.util.handleAlert(namesInput);
      this.submitNames();

      return;
    }
    names = namesInput.value.split(",");
    this.cars = names.map(name => new Car(name));
    this.submitCounts();
  };

  submitCounts = () => {
    const submitButton = document.querySelector("#racing-count-submit");

    this.initCountForm();
    submitButton.addEventListener("click", this.onClick);
  };

  initCountForm = () => {
    const countForm = document.querySelector(".racing-count-form");

    countForm.style.display = "";
  };

  runRace = () => {
    const countInput = document.querySelector("#racing-count-input");
    const count = Number(countInput.value);

    if (!this.util.checkValidation(countInput)) {
      this.util.handleAlert(countInput);
      this.submitCounts();

      return;
    }
    this.initCars();
    this.initResult();
    for (let i = 0; i < count; i++) {
      this.runRound();
    }
    this.render.renderWinners(this.cars);
  };

  initCars = () => {
    this.cars.forEach(car => (car.position = 0));
  };

  initResult = () => {
    const resultContainer = document.querySelector(".result-container");

    resultContainer.style.display = "";
    resultContainer.innerHTML = "";
  };

  runRound = () => {
    const roundResult = [];

    this.cars.forEach(car => {
      car.position += this.util.getDistance();
      roundResult.push({ name: car.name, position: car.position });
    });
    this.render.renderResult(roundResult);
  };
}
