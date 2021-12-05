export function makeStringToArrayByComma(string) {
  return string.split(",");
}

export function isElementsOverFiveWords(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) return true;
  }
  return false;
}

export function isElementsNoNamed(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === 0) return true;
  }
  return false;
}

export function isElementsExsistSpace(array) {
  const pattern = /\s/g;
  for (let i = 0; i < array.length; i++) {
    if (array[i].match(pattern)) return true;
  }
  return false;
}

// + 중복 이름
