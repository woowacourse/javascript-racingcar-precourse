const RaceService = require('./RaceService');
const { MESSAGE } = require('./utils/constants');
const { print } = require('./view/OutputView');
const ResultView = require('./view/ResultView');
const WinnerView = require('./view/WinnerView');

class RaceController {
  #service = new RaceService();

  createCar(input) {
    const cars = input.split(',').map((car) => car.trim());
    this.#service.createCar(cars);
  }

  printResult(attempts) {
    print(MESSAGE.result);

    for (let i = 0; i < attempts; i += 1) {
      const result = this.getResult();
      print(this.printResultStr(result));

      if (i === attempts - 1) this.printWinner(result);
    }
  }

  getResult() {
    return this.#service.play();
  }

  printResultStr(result) {
    return ResultView.print(result);
  }

  printWinner(result) {
    const winner = WinnerView.getWinner(result);
    print(winner);
  }
}
module.exports = RaceController;
