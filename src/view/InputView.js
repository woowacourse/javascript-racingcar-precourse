const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');
const RaceController = require('../RaceController');
const handleError = require('./handleError');
const CarsValidator = require('./validation/CarsValidator');
const AttemptsValidator = require('./validation/AttemptsValidator');

class InputView {
  #controller = new RaceController();

  inputCarName() {
    Console.readLine(MESSAGE.start, (input) => {
      handleError(
        () => CarsValidator.validate(input),
        () => this.inputCarName(),
      );
      this.#controller.createCar(input);
      this.inputAttempts();
    });
  }

  inputAttempts() {
    Console.readLine(MESSAGE.attempts, (input) => {
      handleError(
        () => AttemptsValidator.validate(input),
        () => this.inputAttempts(),
      );

      this.#controller.printResult(input);
    });
  }
}

module.exports = InputView;
