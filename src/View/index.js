const InputView = require('./InputView');
const OutputView = require('./OutputView');
const INPUT_MESSAGE = {
    name: "자동차 이름을 5자 이하로 입력해주세요. (여러대일 경우 콤마+스페이스로 구분)\n",
    try: "시도할 횟수를 입력해주세요.\n"
};

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