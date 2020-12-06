export function isSpecialCharacter(carNamesInput) {
  const rSpecialCharacter = /[^가-힣ㄱ-하-ㅣa-zA-z0-9,]/;
  return rSpecialCharacter.test(carNamesInput);
}
  
export function isAvailableLength(carNamesInput) {
  const splitCarNamesInput = carNamesInput.split(",");
  const availableLength = 5;
  const arrayLength = splitCarNamesInput.length;
  let i = 0;

  for (i; i < arrayLength; i++) {
    if (splitCarNamesInput[i].length > availableLength) {
      return false;
    }
  }

  return true;
}