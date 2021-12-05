export function getMaxLengthOfStringList(strList) {
  return strList.reduce((currMaxLen, str) => Math.max(currMaxLen,str.length), 0);
}

export function isValidPositiveNumber(numStr) {
  if (isNaN(numStr)) return false;
  return parseInt(numStr) > 0;
}