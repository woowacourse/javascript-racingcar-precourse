import Car from './car.js';

export default class Race {
  constructor(carList, raceNumber) {
    this.carList = carList;
    this.raceNumber = raceNumber;

    this.$result = document.createElement('div');
    this.$result.id = 'result';
  }

  makeCarList(carList) {
    const carObjectList = carList.map((item) => {
      return new Car(item);
    });
    return carObjectList;
  }

  raceOneTime(carObjectList) {
    carObjectList.forEach((item) => item.raceAdvance());
    return carObjectList;
  }

  appendResultElement(carObjectList) {
    const $p = document.createElement('p');

    carObjectList.forEach((item) => {
      const $span = document.createElement('span');
      const $br = document.createElement('br');
      $span.textContent = `${item.name}: ${item.advance}`;
      $p.appendChild($span);
      $p.appendChild($br);
    });

    this.$result.appendChild($p);
  }
}
