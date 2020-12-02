import {
  printRaceResult,
  printResultContainer,
  printRoundResult,
} from "./print.js";
import {
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
  this.carArray = inputStringToArray(
    document.getElementById("car-names-input").value
  );

  setContainerVisible("car-game-count-container", true);
}

export function handleCountSubmit() {
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
