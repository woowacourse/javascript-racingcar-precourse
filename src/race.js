import Car from './car.js';

export default class Race {
  constructor(carList, raceNumber) {
    this.carList = carList;
    this.raceNumber = raceNumber;

    this.$result = document.createElement('div');
    this.$result.id = 'result';
  }
}
