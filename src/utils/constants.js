const MESSAGE = Object.freeze({
  start: '자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.\n',
});

const ERROR = Object.freeze({
  name: '자동차 이름은 5자리 이하로 콤마로 구분되어야 합니다.',
  car_min: '경주를 위해 자동차는 2대 이상 이름을 등록해주세요.',
});
module.exports = { MESSAGE, ERROR };
