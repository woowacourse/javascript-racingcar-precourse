const InputView = require('./InputView');
const OutputView = require('./OutputView');
const INPUT_MESSAGE = {
    name: "자동차 이름을 5자 이하로 입력해주세요. (여러대일 경우 콤마로 구분)"
};

const View = {
  readCarName(callback) {
    InputView.readLine(INPUT_MESSAGE.name, callback);
  },

  printError(error) {
    OutputView.printError(error);
  },
}

module.exports = View;