import {
  printRaceResult,
  printResultContainer,
  printRoundResult,
} from "./print.js";
import {
  clearResult,
  inputStringToArray,
  isCarForward,
  setContainerVisible,
} from "./utils.js";

const startRacing = (carArray) => {
  for (let i = 0; i < carArray.length; i++) {
    isCarForward() && carArray[i].count++;
  }

  printResultContainer(carArray, printRoundResult);

  return carArray;
};

export function handleNamesSubmit() {
  clearResult();
  this.carArray = inputStringToArray(
    document.getElementById("car-names-input").value
  );

  if (this.carArray.length > 0)
    setContainerVisible("car-game-count-container", true);
  else alert("입력 값이 잘못되었습니다!");
}

export function handleCountSubmit() {
  clearResult();
  const inputValue = document.getElementById("car-names-input").value;
  this.carArray = inputStringToArray(inputValue);

  const countValue = document.getElementById("racing-count-input").value;
  if (countValue <= 0) {
    alert("1 이상의 값을 입력해주세요.");
    return;
  }

  for (let i = 0; i < countValue; i++) {
    this.carArray = startRacing(this.carArray);
  }
  printResultContainer(this.carArray, printRaceResult);
  setContainerVisible("car-game-result-container", true);
}
