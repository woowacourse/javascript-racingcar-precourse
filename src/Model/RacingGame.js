const { nameFormatter } = require('../lib/utils/formatter');
const { carMoveSort, winFilter } = require('../lib/utils/system');
const { carNameValidation, countValidation } = require('../lib/utils/validation');
const Car = require('./Car');

class RacingGame {
  #count = 0;

  #carNames = [];

  #carList = [];

  result = {
    process: [],
    winner: null,
  };

  setCarNames(names) {
    carNameValidation(names);
    this.#carNames = nameFormatter(names);
  }

  setCount(count) {
    countValidation(count);
    this.#count = Number(count);
  }

  makeCar() {
    this.#carNames.forEach((name) => this.#carList.push(new Car(name)));
    return this;
  }

  racing() {
    for (let i = 0; i < this.#count; i += 1) {
      this.#racingProcess();
    }
    return this;
  }

  #racingProcess() {
    const round = this.#getRound();
    this.result.process.push(round);
  }

  #getRound() {
    return this.#carList.reduce((acc, car) => {
      car.goOrStop();
      acc.push(car.getMoveMessage());
      return acc;
    }, []);
  }

  checkWinner() {
    const max = this.#carList.sort(carMoveSort)[0];
    const maxFilter = this.#carList.filter((car) => winFilter(car, max));
    this.result.winner = maxFilter.map((car) => car.getName());
    return this;
  }

  getResult() {
    return this.result;
  }
}

module.exports = RacingGame;
