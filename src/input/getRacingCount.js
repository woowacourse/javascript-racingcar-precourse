function checkValidRacingCount(value) {
  if (Math.sign(value) === 1) {
    return true;
  }
  return false;
}

export default function getRacingCount() {
  const $racingCountInput = document.querySelector('#racing-count-input');

  if (!checkValidRacingCount($racingCountInput.value)) {
    alert('잘못 된 입력입니다! 0이상의 숫자만 입력 가능합니다');
    return false;
  }
  return $racingCountInput.value;
}
