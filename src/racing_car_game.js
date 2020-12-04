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
      this.setCarsList();
    }
    if (target === "racing-count-submit") {
      this.runRace();
    }
  };

  setCarsList = () => {
    const namesInput = document.querySelector("#car-names-input");
    const value = namesInput.value;

    if (!this.util.checkValidation(namesInput)) {
      this.handleError(namesInput);
      this.submitNames();

      return;
    }
    this.carsList = value.split(",");
    this.carsList = this.carsList.map(name => new Car(name));
    this.submitCounts();
  };

  handleError = node => {
    node.value = "";
    this.util.alertMessage(node);
  };

  submitCounts = () => {
    const countForm = document.querySelector(".racing-count-form");
    const submitButton = document.querySelector("#racing-count-submit");

    countForm.style.display = "";
    submitButton.addEventListener("click", this.onClick);
  };

  runRace = () => {
    const countInput = document.querySelector("#racing-count-input");
    const resultContainer = document.querySelector(".result-container");
    let count = Number(countInput.value);

    if (!this.util.checkValidation(countInput)) {
      this.handleError(countInput);
      this.submitCounts();

      return;
    }
    resultContainer.style.display = "";
    for (let i = 0; i < count; i++) {
      this.runRound();
    }
    this.render.renderWinners(this.carsList);
  };

  runRound = () => {
    const result = [];

    this.carsList.forEach(car => {
      car.position += this.util.getDistance();
      result.push({ name: car.name, position: car.position });
    });
    this.render.renderResult(result);
  };
}
