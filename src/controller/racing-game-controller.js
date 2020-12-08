import CarFactory from "../domain/carfacotory.js";
import Record from "../view/record.js";
import { Element, ElementControl } from "../view/element.js";

const ERROR_MESSAGE = "1 이상의 숫자(정수)를 입력해주세요.";
const MAX_RANDOM_NUMBER = 9;
const CRITERION = 4;

export default class RacingCarGame {
  constructor() {
    this.carArray = [];
    this.racingCount = 0;
  }

  handleCarNameInput() {
    const carFactory = new CarFactory();
    this.carArray = carFactory.getCarArray();

    if (this.carArray.length !== 0) {
      ElementControl.showCarGameCountContainer();
    }
  }

  handleRacingCountInput() {
    this.racingCount = Number(Element.racingCountInput.value);

    if (this.isValidNumber(this.racingCount)) {
      this.startRacing();
    } else {
      alert(ERROR_MESSAGE);
      ElementControl.clearRacingCountInput();
      ElementControl.hideCarGameResultContainer();
    }
  }

  isValidNumber(racingCount) {
    return (racingCount > 0 && Number.isInteger(racingCount));
  }

  startRacing() {
    const record = new Record();

    this.carArray = record.resetRecord(this.carArray);

    for (let i = 0; i < this.racingCount; i++) {
      for (let j = 0; j < this.carArray.length; j++) {
        this.raceRound(this.carArray[j]);
        record.saveRecord(this.carArray[j]);
      }
      record.saveLineBreak();
    }
    record.showRecord();
    record.showWinner(this.carArray);
  }

  raceRound(car) {
    if (Math.floor(Math.random() * MAX_RANDOM_NUMBER + 1) >= CRITERION) {
      car.moveForward();
    }
  }
}
