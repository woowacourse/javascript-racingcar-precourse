const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  MESSAGE: {
    carName:
      '자동차 이름을 5자 이하로 콤마로 구분하여 입력해 주세요.\n올바른 예) east,west,south,north',
    tryCount: '시도할 횟수를 입력해 주세요.',
  },

  readInput(message, callback, validate) {
    Console.readLine(message, (input) => {
      try {
        validate(input);
        callback(input);
      } catch (error) {
        InputView.readInput(message, callback, validate);
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
