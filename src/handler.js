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
  for (
    let i = 0;
    i < document.getElementById("racing-count-input").value;
    i++
  ) {
    this.carArray = startRacing(this.carArray);
  }

  printResultContainer(this.carArray, printRaceResult);

  setContainerVisible("car-game-result-container", true);
}
