const RaceService = require('./RaceService');
const { MESSAGE } = require('./utils/constants');
const { print } = require('./view/OutputView');
const ResultView = require('./view/ResultView');

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
      print(result);
    }
  }

  getResult() {
    const result = this.#service.play();
    return ResultView.print(result);
  }
}
module.exports = RaceController;
