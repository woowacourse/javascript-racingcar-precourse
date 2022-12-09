const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');
const RaceController = require('../RaceController');
const handleError = require('./handleError');
const CarsValidation = require('./validation/CarsValidation');

class InputView {
  #controller = new RaceController();

  inputCarName() {
    Console.readLine(MESSAGE.start, (input) => {
      handleError(() => CarsValidation.validate(input), this.inputCarName);

      this.#controller.createCar(input);
    });
  }
}

module.exports = InputView;
