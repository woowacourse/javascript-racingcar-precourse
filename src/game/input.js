import {
  permitRacingCountForm,
  blockRacingCountForm,
} from "../util/block-and-permit.js";
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
    blockRacingCountForm();
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
    permitRacingCountForm();
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

    this.game.play(this.cars, this.racingCount);
  };
}
