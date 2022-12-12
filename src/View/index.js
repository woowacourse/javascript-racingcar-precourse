const InputView = require('./InputView');
const OutputView = require('./OutputView');
const {INPUT_MESSAGE} = require("../Constants/view")

const View = {
  readCarName(callback) {
    InputView.readLine(INPUT_MESSAGE.name, callback);
  },

  readTry(callback) {
    InputView.readLine(INPUT_MESSAGE.try, callback);
  },

  printError(error) {
    OutputView.printError(error);
  },

  printResult(input) {
    OutputView.printResult(input)
  }
}

module.exports = View;
