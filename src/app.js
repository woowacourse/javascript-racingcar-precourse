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
  }
}
