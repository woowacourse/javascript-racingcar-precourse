const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  MESSAGE: {
    start: '자동차 경주 게임을 시작합니다.',
  },

  printStart() {
    Console.print(OutputView.MESSAGE.start);
  },
};

module.exports = OutputView;
