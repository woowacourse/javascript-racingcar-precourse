import Winner from "../domain/winner.js";
import { Element, ElementControl } from "./element.js";

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
}
