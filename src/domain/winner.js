export default class Winner {
  constructor() {
    this.winnerNameArray = [];
  }

  getWinner(carArray) {
    this.findWinner(carArray);

    return this.winnerNameArray;
  }

  findWinner(carArray) {
    const _maxValue = Math.max.apply(Math, carArray.map((car) => car.position));
    const _winnerArray = carArray.filter((car) => (car.position === _maxValue));

    this.winnerNameArray = _winnerArray.map((car) => car.name);
  }
}