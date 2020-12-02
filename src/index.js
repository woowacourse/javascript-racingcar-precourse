import RacingCar from "./RacingCar";

export default class RacingCarGame {
  constructor() {
    this.allClickEventListener();
  }
  allClickEventListener() {
    this.addEventListenerById("car-names-submit", this.nameSubmitClickEvent);
  }
  nameSubmitClickEvent() {
    const carNames = document
      .getElementById("car-names-input")
      .value.split(",");
    carNames.map((carName) => new RacingCar(carName));
  }
  addEventListenerById(id, event) {
    const element = document.getElementById(id);
    element.addEventListener("click", event);
  }
}

new RacingCarGame();
