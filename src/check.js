export function isSpecialCharacter(carNamesInput) {
  const rSpecialCharacter = /[^가-힣ㄱ-하-ㅣa-zA-z0-9,]/;
  return rSpecialCharacter.test(carNamesInput);
}
  
export function isAvailableLength(carNamesInput) {
  const availableLength = 5;
  const arrayLength = carNamesInput.length;
  let i = 0;

  for (i; i < arrayLength; i++) {
    const minLength = 2;
    let carNamesLength = carNamesInput[i].length;

    if (carNamesLength > availableLength || arrayLength < minLength) {
      return false;
    }
  }
  return true;
}

export function isDuplicated(carNamesInput) {
  const arrayLength = carNamesInput.length;
  const setArrayLength = new Set(carNamesInput).size;

  if (arrayLength === setArrayLength) {
    return false;
  }
}

export function isAvailableNames(carNamesInput) {
  if (isSpecialCharacter(carNamesInput) === false && isDuplicated(carNamesInput) === false && isAvailableLength(carNamesInput) === true) {
    const racingCountDiv = document.querySelector("#racing-count-div");
    racingCountDiv.style.display = "block";
    return true;
  } else {
    alert("5자 이하로 이루어진 이름을, 중복과 공백 없이, 콤마로 구분하여 입력해 주세요.");
  }
}

export function isAvailableNumber() {
  const racingCountInput = document.querySelector("#racing-count-input").value;
  const minNumber = 0;

  if (racingCountInput > minNumber) {
    return racingCountInput;
  }
  else {
    alert("1 이상의 숫자를 입력해 주세요.");
  }
}

export function makeResultEmpty() {
  let result = document.querySelector("#result");
  let winner = document.querySelector("#winner");

  if (result.innerText && winner.innerText) {
    result.innerText = "";
    winner.innerText = "";
  }  
}