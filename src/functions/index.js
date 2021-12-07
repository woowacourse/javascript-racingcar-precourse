/* eslint-disable no-undef */
export function getMaxLengthOfStringList(strList) {
  return strList.reduce((currMaxLen, str) => Math.max(currMaxLen, str.length), 0);
}

export function isValidPositiveNumber(numStr) {
  if (Number.isNaN(numStr)) return false;
  return parseInt(numStr, 10) > 0;
}

export function getRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}
