import { printResultContainer, printRoundResult } from "./print.js";
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
