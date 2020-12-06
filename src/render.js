import { validateCar, validateCount } from "./validator.js";

const setVisiblity = (elem, isShow) => {
  if (isShow) elem.style.display = "inline";
  else elem.style.display = "none";
};

const setPlayButton = () => {
  const countElem = document.getElementsByClassName("car-game-container")[0]
    .children[1];
  setVisiblity(countElem, true);
};

export const getCarInput = (game) => {
  const inputElem = document.getElementById("car-names-input");
  const inputArr = inputElem.value.split(",");

  if (validateCar(inputArr)) {
    game.createCarObj(inputArr);
    setPlayButton();
  } else {
    alert("자동차 이름을 다시 입력하세요.");
    inputElem.value = "";
  }
};

export const getCountInput = (game) => {
  const inputElem = document.getElementById("racing-count-input");
  const inputVal = inputElem.value;

  if (validateCount(inputVal)) {
    game.play(inputVal);
  } else {
    alert("시도할 횟수를 다시 입력하세요.");
    inputElem.value = "";
  }
};

export const reSetByName = (game) => {
  const result = document.getElementsByClassName("racing-result-container")[0];

  game.resultString = "";
  document.getElementById("racing-count-input").value = "";
  result.removeChild(result.lastChild);
  setVisiblity(result, false);
};

export const setResult = (game) => {
  const result = document.getElementsByClassName("racing-result-container")[0];
  let div = document.createElement("div");
  setVisiblity(result, true);
  div.innerHTML = game.resultString;
  result.appendChild(div);
};

export const combineResult = (game, string) => {
  game.resultString += string + "<br>";
};
