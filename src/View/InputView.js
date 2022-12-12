const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readLine(message, callback) {
    Console.readLine(message, callback);
  },
};

module.exports = InputView;
