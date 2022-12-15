const { Random } = require('@woowacourse/mission-utils');
const CarGame = require('../model/CarGame');
const { readCarName, readTryCount } = require('../view/InputView');
const { printStart } = require('../view/OutputView');

class Controller {
  #carGame = new CarGame();

  start() {
    printStart();

    readCarName(this.setCar.bind(this));
  }

  setCar(input) {
    this.#carGame.generateCars(input);

    this.askTryCount();
  }

  askTryCount() {
    readTryCount();
  }

  move(pickNumber) {}
}

module.exports = Controller;
