export function getMaxLengthOfStringList(strList){
  return strList.reduce((currMaxLen, str) => Math.max(currMaxLen,str.length), 0);
}