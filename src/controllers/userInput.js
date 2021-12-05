import {
  makeStringToArrayByComma,
  isElementsOverFiveWords,
  isElementsExsistSpace,
  isElementsNoNamed,
  isDuplicate,
} from "./utils.js";

export function carNamesInput() {
  const $carNamesInput = document.getElementById("car-names-input");
  const carsArray = makeStringToArrayByComma($carNamesInput.value);

  if (isElementsOverFiveWords(carsArray))
    alert("자동차 이름을 5자 이하로 입력해주세요.");
  else if (isElementsExsistSpace(carsArray))
    alert("자동차 이름에 공백을 제거해주세요.");
  else if (isElementsNoNamed(carsArray))
    alert("이름이 없는 자동차가 있습니다.");
  else if (isDuplicate(carsArray))
    alert("중복된 이름을 가진 자동차들이 있습니다.");
  else return carsArray;
}

export function racingCountInput() {
  const $racingCountInput = document.getElementById("racing-count-input");
  return $racingCountInput.value;
}
