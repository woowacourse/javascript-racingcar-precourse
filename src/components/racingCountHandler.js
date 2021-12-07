import { DOMS } from "../util/constant.js";
import { showResultContainer } from "../util/hide-and-show.js";
import { createRacingCountAlertMessage } from "../util/create-alert-message.js";

export default class RacingCountHandler {
  constructor(carsHandler, game) {
    this.carsHandler = carsHandler;
    this.racingCount = 0;
    this.game = game;
  }

  init = () => {
    this.setEvent();
  };

  getRacingCount = () => {
    return this.racingCount;
  };

  setRacingCount = (racingCount) => {
    this.racingCount = racingCount;
  };

  setEvent = () => {
    DOMS.$racingCountForm.addEventListener(
      "submit",
      this.setRacingCountSubmitEvent
    );
  };

  setRacingCountSubmitEvent = (event) => {
    event.preventDefault();
    const racingCount = DOMS.$racingCountInput.value;
    const alertMessage = createRacingCountAlertMessage(racingCount);

    if (alertMessage) {
      alert(alertMessage);
      return;
    }

    this.setRacingCount(racingCount);
    this.game.play(this.carsHandler.getCars(), this.getRacingCount());
    showResultContainer();
  };
}
