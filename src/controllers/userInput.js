import {
  makeStringToArrayByComma,
  IsElementsOverFiveWords,
  IsElementsExsistSpace,
} from "./utils.js";

export function carNamesInput() {
  const $carNamesInput = document.getElementById("car-names-input");
  const carsArray = makeStringToArrayByComma($carNamesInput.value);

  if (IsElementsOverFiveWords(carsArray))
    alert("자동차 이름을 5자 이하로 입력해주세요.");
  else if (IsElementsExsistSpace(carsArray))
    alert("자동차 이름에 공백을 제거해주세요.");
  else return carsArray;
}

export function racingCountInput() {
  const $racingCountInput = document.getElementById("racing-count-input");
  return $racingCountInput.value;
}
