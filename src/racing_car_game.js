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
    }
  };

  setCarsList = () => {
    const namesInput = document.querySelector("#car-names-input");
    const value = namesInput.value;

    if (!this.util.checkValidation(value)) {
      namesInput.value = "";
      this.util.alertMessage(namesInput);
      this.submitNames();

      return;
    }
  };
}
