import Car from "./car.js";
import { Element, ElementControl } from "../view/element.js";
import Record from "../view/record.js";

const ERROR_MESSAGE_INVALID_CAR_NAME =
  "1자 이상 5자 이하의 공백을 포함하지 않는 자동차 이름을 입력해주세요.";
const ERROR_MESSAGE_INVALID_THE_NUMBER_OF_CAR =
  "2대 이상의 중복되지 않은 자동차 이름을 입력해주세요.";
const MAXIMUM_NAME_LENGTH = 5;

export default class CarFactory {
  constructor() {
    this.makeCarArray();
  }

  makeCarArray() {
    const carNameArray = this.getCarNames();
    this.carArray = [];

    if (carNameArray !== undefined) {
      for (let i = 0; i < carNameArray.length; i++) {
        this.carArray.push(new Car(carNameArray[i]));
      }
    }
  }

  getCarNames() {
    let tmpCarNamesArray = Element.carNamesInput.value.split(",");
    const record = new Record();

    if (!this.isValidCarName(tmpCarNamesArray)) {
      alert(ERROR_MESSAGE_INVALID_CAR_NAME);
      record.cleanEveryElements();
    } else if (!this.isValidTheNumberOfCar(tmpCarNamesArray)) {
      alert(ERROR_MESSAGE_INVALID_THE_NUMBER_OF_CAR);
      record.cleanEveryElements();
    } else {
      ElementControl.hideCarGameResultContainer();
      ElementControl.clearRacingCountInput();
      return tmpCarNamesArray;
    }
  }

  isValidCarName(tmpCarNamesArray) {
    let carNameCandidate = "";

    for (let i = 0; i < tmpCarNamesArray.length; i++) {
      carNameCandidate = tmpCarNamesArray[i];

      if (carNameCandidate.includes(" ")) {
        return false;
      }

      if (this.isNotValidNameLength(carNameCandidate.length)) {
        return false;
      }
    }

    return true;
  }

  isNotValidNameLength(length) {
    return (length === 0 || length > MAXIMUM_NAME_LENGTH);
  }

  isValidTheNumberOfCar(tmpCarNamesArray) {
    const checkingSet = new Set(tmpCarNamesArray);

    return (
      checkingSet.size > 1 && checkingSet.size === tmpCarNamesArray.length
    );
  }

  getCarArray() {
    return this.carArray;
  }
}
