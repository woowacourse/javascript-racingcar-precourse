export default function isValidRacingCount(racingCountString) {
  const racingCount = Number(racingCountString);
  if (Number.isNaN(racingCount) || racingCount === 0) {
    alert('0이 아닌 숫자를 입력해주세요.');
    return false;
  }
  return true;
}
