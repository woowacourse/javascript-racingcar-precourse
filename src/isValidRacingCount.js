export default function isValidRacingCount(racingCountString) {
  const racingCount = Number(racingCountString);
  if (Number.isNaN(racingCount) || racingCount === 0) {
    return false;
  }
  return true;
}
