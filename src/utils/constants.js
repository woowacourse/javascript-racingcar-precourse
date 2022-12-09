const MESSAGE = Object.freeze({
  start: '자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.\n',
  attempts: '\n시도할 횟수를 입력해주세요.\n',
  result: '\n실행 결과\n',
});

const ERROR = Object.freeze({
  name: '자동차 이름은 5자리 이하로 콤마로 구분되어야 합니다.',
  least_count: '경주를 위해 자동차는 2대 이상 이름을 등록해주세요.',
  duplicate: '자동차 이름이 중복되었습니다.',
  attempts: '시도 횟수는 숫자를 입력해야 합니다.',
});
module.exports = { MESSAGE, ERROR };
