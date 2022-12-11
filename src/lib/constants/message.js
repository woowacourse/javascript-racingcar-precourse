const LINE_BREAK = '\n';

const INPUT_MESSAGE = Object.freeze({
  name: '자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.',
  count: `${LINE_BREAK}시도할 횟수를 입력해주세요.`,
});

const RESULT_MESSAGE = Object.freeze({
  result: `${LINE_BREAK}실행 결과`,
  winner: (winner) => `최종 우승자: ${winner.join(', ')}`,
});

const MOVE = '-';

module.exports = {
  LINE_BREAK,
  INPUT_MESSAGE,
  RESULT_MESSAGE,
  MOVE,
};
