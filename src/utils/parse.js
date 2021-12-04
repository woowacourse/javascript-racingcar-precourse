export function strToArray(str, separator) {
  const arr = str.split(separator);
  return filterBlankInArray(arr);
}

function filterBlankInArray(arr) {
  return arr.filter((el) => el !== '');
}
