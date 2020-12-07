import Winner from "../domain/winner.js";
import { Element, ElementControl } from "./element.js";

const INITAL_RESULT_HTML = '<h4>📄 실행 결과</h4>';

export default class Record {
  constructor() {
    this.record = "";
  }

  saveRecord(car) {
    this.record += `${car.name}: ${"-".repeat(car.position)}<br>`;
  }

  saveLineBreak() {
    this.record += "<br>";
  }

  showRecord() {
    ElementControl.showCarGameResultContainer();
    Element.carGameResultContainer.innerHTML += this.record;
  }

  showWinner(carArray) {
    const _winner = new Winner();
    let _winnerNameArray = [];

    _winnerNameArray = _winner.getWinner(carArray);
    Element.carGameResultContainer.innerHTML +=
      `최종 우승자: ${_winnerNameArray.join(", ")}`;
  }

  cleanEveryElements() {
    ElementControl.clearCarNamesInput();
    ElementControl.hideCarGameCountContainer();
    ElementControl.clearRacingCountInput();
    ElementControl.hideCarGameResultContainer();
  }

  resetRecord(carArray) {
    Element.carGameResultContainer.innerHTML = INITAL_RESULT_HTML + "";

    for (let i = 0; i < carArray.length; i++) {
      carArray[i].position = 0;
    }

    return carArray;
  }
}
