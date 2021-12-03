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
}
