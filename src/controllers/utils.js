export function makeStringToArrayByComma(string) {
  return string.split(",");
}

export function IsElementsOverFiveWords(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) return true;
  }
  return false;
}

export function IsElementsExsistSpace(array) {
  const pattern = /\s/g;
  for (let i = 0; i < array.length; i++) {
    if (array[i].match(pattern)) return true;
  }
  return false;
}
