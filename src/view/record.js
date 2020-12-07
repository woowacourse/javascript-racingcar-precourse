import { Element, ElementControl } from "./element.js"

export default class Record {
  constructor() {
    this.record = "";
  }

  saveRecord(car) {
    this.record += `${car.name}: ${'-'.repeat(car.position)}<br>`;
  }

  saveLineBreak() {
    this.record += '<br>';
  }

  showRecord() {
    ElementControl.showCarGameResultContainer();
    Element.carGameResultContainer.innerHTML += '<p>' + this.record + '</p>';
  }
}