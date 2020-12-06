import EventsHandler from "./js/eventsHandler.js";
import RacingGame from "./js/racingGame.js";
import Render from "./js/render.js";

export default class App extends EventsHandler {
  constructor() {
    super();
  }

  _onClickRacingCount() {
    super._onClickRacingCount();
  }

  gamePlay() {
    super.gamePlay();
    this.carNames = this.carNamesInput.value.split(",");
    this.racingCount = Number(this.racingCountInput.value);

    const racingGame = new RacingGame(this.carNames, this.racingCount);
    const racingGameResult = [this.carNames, this.racingCount].concat(
      racingGame.getRacingGameRecord()
    );

    new Render(racingGameResult);

    this.showGameResetButton();
  }

  showGameResetButton() {
    const hiddenResetBtn = document.querySelector(".js-hidden__div");
    const resetBtn = document.querySelector("#game-reset-button");
    hiddenResetBtn.classList.remove("js-hidden__div");

    resetBtn.addEventListener("click", this.gameReset.bind(this));
  }

  gameReset() {
    location.reload();
  }
}
