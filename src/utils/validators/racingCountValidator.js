export default function racingCountValidator(racingCount) {
  if (racingCount <= 0) {
    return alert('0보다 큰 숫자를 입력해주세요');
  }

  return true;
}
