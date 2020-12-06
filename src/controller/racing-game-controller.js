import CarFactory from "../domain/carfacotory.js";
import { Element, ElementControl } from "../view/element.js";

export default class RacingCarGame {
  constructor() {
    this.carArray = [];
  }

  handleCarNameInput() {
    const _carFactory = new CarFactory();
    this.carArray = _carFactory.getCarArray();

    if (this.carArray.length !== 0) {
      ElementControl.showCarGameCountContainer();
    }
  }

  handleRacingCountInput() {
    const _racingCount = Number(Element.racingCountInput.value);

    if (this.isValidNumber(_racingCount)) {
      console.log(this.carArray, _racingCount)
    } else {
      alert("1 이상의 숫자를 입력해주세요.");
    }
  }

  isValidNumber(racingCount) {
    return (racingCount > 0);
  }
}