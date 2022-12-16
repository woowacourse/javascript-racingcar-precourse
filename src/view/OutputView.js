const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  MESSAGE: {
    start: '자동차 경주 게임을 시작합니다.',
    track: '-',
    winner: '최종 우승자',
  },

  printStart() {
    Console.print(OutputView.MESSAGE.start);
  },

  getMovingResult(movingResult) {
    return movingResult
      .map(({ name, moveCount }) => `${name}: ${OutputView.MESSAGE.track.repeat(moveCount)}\n`)
      .join('');
  },

  printMovingResult(movingResult) {
    Console.print(OutputView.getMovingResult(movingResult));
  },

  printWinner(winners) {
    Console.print(`${OutputView.MESSAGE.winner}: ${winners.join(', ')}`);
  },
};

module.exports = OutputView;
