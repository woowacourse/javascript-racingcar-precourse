export function isSpecialCharacter(carNamesInput) {
  const rSpecialCharacter = /[^가-힣ㄱ-하-ㅣa-zA-z0-9,]/;
  return rSpecialCharacter.test(carNamesInput);
}
  
export function isAvailableLength(carNamesInput) {
  const availableLength = 5;
  const arrayLength = carNamesInput.length;
  let i = 0;

  for (i; i < arrayLength; i++) {
    if (carNamesInput[i].length > availableLength) {
      return false;
    }
  }

  return true;
}

export function isDuplicated(carNamesInput) {
  const arrayLength = carNamesInput.length
  const setArrayLength = new Set(carNamesInput).size

  if (arrayLength === setArrayLength) {
    return false
  }
}

export function makeResultEmpty() {
  let result = document.querySelector("#result");
  let winner = document.querySelector("#winner")

  if (result.innerText && winner.innerText) {
    result.innerText = '';
    winner.innerText = '';
  }  
}