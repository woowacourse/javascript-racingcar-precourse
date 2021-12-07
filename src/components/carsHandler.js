import { showRacingCountContainer } from "../util/hide-and-show.js";
import { DOMS } from "../util/constant.js";
import Car from "../Car/Car.js";
import { createCarNameAlertMessage } from "../util/create-alert-message.js";

export default class CarsHandler {
  constructor() {
    this.cars = [];
  }

  init = () => {
    this.setEvent();
  };

  getCars = () => {
    return this.cars;
  };

  setCars = (carNames) => {
    this.cars = carNames.map((carName) => new Car(carName));
  };

  setEvent = () => {
    DOMS.$carNamesForm.addEventListener("submit", this.setCarNameSubmitEvent);
  };

  setCarNameSubmitEvent = (event) => {
    event.preventDefault();
    const carNames = DOMS.$carNamesInput.value.split(",");
    const alertMessage = createCarNameAlertMessage(carNames);

    if (alertMessage) {
      alert(alertMessage);
      return;
    }

    this.setCars(carNames);
    showRacingCountContainer();
  };
}
