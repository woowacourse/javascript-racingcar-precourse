import Car from "./car.js";
import Render from "./render.js";
import Util from "./util.js";

export default class RacingCarGame {
  util = new Util();

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
      this.runGame();
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

  runGame = () => {
    const countInput = document.querySelector("#racing-count-input");
    const count = Number(countInput.value);

    if (!this.util.checkValidation(countInput)) {
      this.handleError(countInput);
      this.submitCounts();

      return;
    }
    for (let i = 0; i < count; i++) {
      this.randomMove();
      this.renderResult(this.carsList);
    }
    this.renderWinner(this.carsList);
  };
}
