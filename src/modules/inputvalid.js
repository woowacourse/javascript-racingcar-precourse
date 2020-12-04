import {MAX_NAME_LENGTH} from './utils.js';

const isRightNameInput = (nameInput) => {
  if (nameInput.find((name) => name.match(/[^a-zA-Z0-9가-힣]/))) {
    return alert('특수문자는 사용 불가능합니다.');
  }
  if (nameInput.some((name) => name.length > MAX_NAME_LENGTH)) {
    return alert('이름은 5자리 이하로 입력해주세요.');
  }
  if (nameInput.some((name) => name === '')) {
    return alert('빈칸은 입력할 수 없습니다.');
  }
  if (nameInput.length !== new Set(nameInput).size) {
    return alert('중복된 이름이 존재합니다.');
  }

  return true;
};

const isRightRacingCountInput = (count) => {
  if (parseInt(count, 10) <= 0) {
    return alert('1이상의 숫자를 입력해주세요.');
  }
  if (count === '') {
    return alert('빈칸을 입력하셨습니다.');
  }

  if (count.match(/\D/)) {
    return alert('숫자를 입력해주세요.');
  }

  return true;
};

export default function checkInputValid(target, input) {
  if (target.id === 'car-names-submit') {
    return isRightNameInput(input.split(','));
  }
  if (target.id === 'racing-count-submit') {
    return isRightRacingCountInput(input);
  }
}
