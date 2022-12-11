const ERROR_CODE = '[ERROR]';
const MESSAGE = Object.freeze({
  name_unit: '자동차 이름은 쉼표로 구분해주세요.',
  name_range: '자동차 이름은 최소 1글자 이상 최대 5글자 이하로 작성해주세요.',
  count_number: '숫자를 입력해주세요.',
  count_zero: '0 이상 입력해주세요.',
});
module.exports = {
  ERROR_CODE,
  MESSAGE,
};
