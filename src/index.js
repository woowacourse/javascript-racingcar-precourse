import Racing from "./racingGame/Racing.js";
import Render from "./racingGame/Render.js";
import User from "./racingGame/User.js";
import checkValidCarNames from "./validation/checkCarNames.js";
import checkValidracingCount from "./validation/checkRacingCount.js";

class RacingCarGame {
  constructor() {
    this.render = new Render();
    this.user = new User();
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
    const isValid = checkValidCarNames(this.user.getCarNames());
    if (isValid) {
      this.render.showRacingCountForm();
      this.racingCountForm.addEventListener("submit", e =>
        this.handleSubmitRacingCount(e)
      );
    }
  }

  handleSubmitRacingCount(event) {
    event.preventDefault();
    this.render.clearRacingResult();
    const isValid = checkValidracingCount(this.user.getRacingCount());
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
