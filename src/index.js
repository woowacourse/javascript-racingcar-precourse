import CheckValid from "./CheckValid.js";
import Render from "./Render.js";
import User from "./User.js";

class RacingCarGame {
  constructor() {
    this.render = new Render();
    this.user = new User();
    this.checkValid = new CheckValid();
    this.submitCarNameForm = document.getElementById("car-names-form");
    this.submitRacingCountForm = document.getElementById("racing-count-form");
  }

  start() {
    this.render.hideRacingCountForm();
    this.render.hideResultText();
    this.submitCarNameForm.addEventListener("submit", e =>
      this.handleSubmitCarName(e)
    );
  }

  handleSubmitCarName(event) {
    event.preventDefault();
    const isValid = this.checkValid.carNames(this.user.getCarNames());
    if (isValid) {
      this.render.showRacingCountForm();
    }
  }
}

const racingCarGame = new RacingCarGame();
racingCarGame.start();
