import CarFactory from "../domain/carfacotory.js";
import { Element, ElementControl } from "../view/element.js";

export default class RacingCarGame {
  constructor() {
    this.carArray = [];
    this.racingCount = 0;
  }

  handleCarNameInput() {
    const _carFactory = new CarFactory();
    this.carArray = _carFactory.getCarArray();

    if (this.carArray.length !== 0) {
      ElementControl.showCarGameCountContainer();
    }
  }

  handleRacingCountInput() {
    this.racingCount = Number(Element.racingCountInput.value);

    if (this.isValidNumber(this.racingCount)) {
      // console.log(this.carArray, this.racingCount);

      this.startRacing();
    } else {
      alert("1 이상의 숫자를 입력해주세요.");
    }
  }

  isValidNumber(racingCount) {
    return (racingCount > 0);
  }

  startRacing() {
    for (let i = 0; i < this.carArray.length; i++) {
      this.raceRound(this.carArray[i]);
    }

    console.log(this.carArray);
  }

  raceRound(car) {
    for (let i = 0; i < this.racingCount; i++) {
      if (Math.floor(Math.random() * 10) >= 4) {
        car.moveForward();
      }
    }
  }
}