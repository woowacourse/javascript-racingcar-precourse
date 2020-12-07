export default class Winner {
  constructor() {
    this.winnerNameArray = [];
  }

  getWinner(carArray) {
    this.findWinner(carArray);

    return this.winnerNameArray;
  }

  findWinner(carArray) {
    const maxValue = Math.max.apply(Math, carArray.map((car) => car.position));
    const winnerArray = carArray.filter((car) => car.position === maxValue);

    this.winnerNameArray = winnerArray.map((car) => car.name);
  }
}
