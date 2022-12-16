const { Random, Console } = require('@woowacourse/mission-utils');
const { validateTryCount } = require('../error/ErrorHandler');
const CarGame = require('../model/CarGame');
const { readCarName, readTryCount } = require('../view/InputView');
const { printStart, printMovingResult, printWinner } = require('../view/OutputView');

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
    readTryCount(this.moveAll.bind(this, Random.pickNumberInRange));
  }

  moveOnce(pickNumber) {
    const movingResult = this.#carGame.moveOnce(pickNumber);

    printMovingResult(movingResult);
    return movingResult;
  }

  moveAll(pickNumber, tryCount) {
    validateTryCount(tryCount);
    let movingResult;

    for (let index = 0; index < Number(tryCount); index += 1) {
      movingResult = this.moveOnce(pickNumber);
    }

    Controller.win(movingResult);
  }

  static win(movingResult) {
    const winners = CarGame.getWinner(movingResult);
    printWinner(winners);

    Controller.quit();
  }

  static quit() {
    Console.close();
  }
}

module.exports = Controller;
