import {
  makeStringToArrayByComma,
  IsElementsOverFiveWords,
  IsElementsExsistSpace,
} from "./utils.js";

export function carNamesInput(e) {
  e.preventDefault();
  const $carNamesInput = document.getElementById("car-names-input");
  const cars = makeStringToArrayByComma($carNamesInput.value);

  if (IsElementsOverFiveWords(cars))
    alert("자동차 이름을 5자 이하로 입력해주세요.");
  else if (IsElementsExsistSpace(cars))
    alert("자동차 이름에 공백을 제거해주세요.");
  else console.log(cars);
}
