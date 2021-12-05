import { $ } from './selector.js';

export const submitRacingCount = () => {
  if (isValidCount($('#racing-count-input').value)) {
    return $('#racing-count-input').value;
  }
  $('#racing-count-input').value = '';
  return 0;
};

const isValidCount = count => {
  if (isNaN(count) || count <= 0) {
    alert(`시도할 횟수를 양의 정수로 입력해주세요.`);
    return false;
  }
  return true;
};
