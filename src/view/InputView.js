const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  MESSAGE: {
    carName:
      '\n자동차 이름을 5자 이하로 콤마로 구분하여 입력해 주세요.\n올바른 예) east,west,south,north\n',
    tryCount: '\n시도할 횟수를 입력해 주세요.\n',
  },

  readInput(message, callback) {
    Console.readLine(message, (input) => {
      try {
        callback(input);
      } catch (error) {
        Console.print(error.message);
        InputView.readInput(message, callback);
      }
    });
  },

  readCarName(callback) {
    InputView.readInput(InputView.MESSAGE.carName, callback);
  },

  readTryCount(callback) {
    InputView.readInput(InputView.MESSAGE.tryCount, callback);
  },
};

module.exports = InputView;
