import CarFactory from "../domain/carfacotory.js";
import Record from "../view/record.js";
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
      this.startRacing();
    } else {
      alert("1 이상의 숫자(정수)를 입력해주세요.");
    }
  }

  isValidNumber(racingCount) {
    return (racingCount > 0);
  }

  startRacing() {
    const _record = new Record();

    for (let i = 0; i < this.racingCount; i++) {
      for (let j = 0; j < this.carArray.length; j++) {
        this.raceRound(this.carArray[j]);
        _record.saveRecord(this.carArray[j]);
      }
      _record.saveLineBreak();
    }
    _record.showRecord();
  }

  raceRound(car) {
    if (Math.floor(Math.random() * 10) >= 4) {
      car.moveForward();
    }
  }
}