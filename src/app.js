import EventsHandler from "./js/eventsHandler.js";
import RacingGame from "./js/racingGame.js";
// import render from "./js/render.js";
import Render from "./js/render.js";

export default class App extends EventsHandler {
  constructor() {
    super();
  }

  _onClickRacingCount() {
    super._onClickRacingCount(this.carNames, this.racingCount);
    const racingGame = new RacingGame(this.carNames, this.racingCount);
    const racingGameResult = [this.carNames, this.racingCount].concat(
      racingGame.getRacingGameRecord()
    );

    new Render(racingGameResult);
  }
}
