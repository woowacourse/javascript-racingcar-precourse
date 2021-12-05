import CheckValid from "./CheckValid.js";
import Racing from "./Racing.js";
import Render from "./Render.js";
import User from "./User.js";

class RacingCarGame {
  constructor() {
    this.render = new Render();
    this.user = new User();
    this.checkValid = new CheckValid();
    this.carNameForm = document.getElementById("car-names-form");
    this.racingCountForm = document.getElementById("racing-count-form");
  }

  start() {
    this.render.hideRacingCountForm();
    this.render.hideResultText();
    this.carNameForm.addEventListener("submit", e =>
      this.handleSubmitCarName(e)
    );
  }

  handleSubmitCarName(event) {
    event.preventDefault();
    const isValid = this.checkValid.carNames(this.user.getCarNames());
    if (isValid) {
      this.render.showRacingCountForm();
      this.racingCountForm.addEventListener("submit", e =>
        this.handleSubmitRacingCount(e)
      );
    }
  }

  handleSubmitRacingCount(event) {
    event.preventDefault();
    const isValid = this.checkValid.racingCount(this.user.getRacingCount());
    if (isValid) {
      const racing = new Racing(
        this.user.getCarNames(),
        this.user.getRacingCount()
      );
      racing.start();
    }
  }
}

const racingCarGame = new RacingCarGame();
racingCarGame.start();
