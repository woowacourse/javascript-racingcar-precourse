import { printResultContainer, printRoundResult } from "./print.js";

const startRacing = (carArray) => {
  for (let i = 0; i < carArray.length; i++) {
    isCarForward() && carArray[i].count++;
  }

  printResultContainer(carArray, printRoundResult);

  return carArray;
};
