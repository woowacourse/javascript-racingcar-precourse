import Render from "./Render.js";

class RacingCarGame {
  constructor() {
    this.render = new Render();
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
  }
}

const racingCarGame = new RacingCarGame();
racingCarGame.start();
