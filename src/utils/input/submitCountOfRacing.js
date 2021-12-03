import $ from '../common/selector.js';

export const submitCountOfRacing = e => {
  e.preventDefault();
  const play = Number($('#racing-count-input').value.trim());

  if (play <= 0) {
    alert('입력 횟수를 다시 적어주세요.');
    return;
  }

  return play;
};
