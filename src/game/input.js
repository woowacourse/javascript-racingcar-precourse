import {
  hideRacingCountContainer,
  hideResultContainer,
  showRacingCountContainer,
  showResultContainer,
} from "../util/hide-and-show.js";
import {
  createRacingCountAlertMessage,
  createCarNameAlertMessage,
} from "../util/create-alert-message.js";
import { DOMS } from "../util/constant.js";
import Car from "../Car/Car.js";

export default class Input {
  constructor(game) {
    this.cars = [];
    this.racingCount = 0;
    this.game = game;
  }

  init = () => {
    this.setEvent();
    hideRacingCountContainer();
    hideResultContainer();
  };

  setEvent = () => {
    DOMS.$carNamesForm.addEventListener("submit", this.setCarNameSubmitEvent);
    DOMS.$racingCountForm.addEventListener(
      "submit",
      this.setRacingCountSubmitEvent
    );
  };

  setCarNameSubmitEvent = (event) => {
    event.preventDefault();
    const carNames = DOMS.$carNamesInput.value.split(",");
    const alertMessage = createCarNameAlertMessage(carNames);

    if (alertMessage) {
      alert(alertMessage);
      return;
    }

    this.cars = carNames.map((carName) => new Car(carName));
    showRacingCountContainer();
  };

  setRacingCountSubmitEvent = (event) => {
    event.preventDefault();
    const racingCount = DOMS.$racingCountInput.value;
    const alertMessage = createRacingCountAlertMessage(racingCount);

    if (alertMessage) {
      alert(alertMessage);
      return;
    }

    this.racingCount = racingCount;
    showResultContainer();
    this.game.play(this.cars, this.racingCount);
  };
}
