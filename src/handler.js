import { printRaceResult, printResult, printRoundResult } from "./result.js"
import { clear, isCarForward, setContainerVisible, userInput } from "./initial.js"

const startRacing = (carArray) => {
  for ( let i = 0; i < carArray.length; i++) {
    isCarForward() && carArray[i].count++;
  }

  printResult(carArray, printRoundResult);

  return carArray;
};

export function handleNamesSubmit() {
  clear();
  this.carArray = userInput(
    document.getElementById("car-names-input").value
  );

  if (this.carArray.length > 0) {
    setContainerVisible("car-game-count-container", true);
  } else {
    alert("잘못된 입력입니다.")
  }
}

export function handleCountSubmit() {
  clear()
  const inputValue = document.getElementById("car-names-input").value;
  this.carArray = userInput(inputValue);

  const countValue = document.getElementById("racing-count-input").value;
  if (countValue <= 0) {
    alert("1 이상 입력해 주세요")
    return;
  }

  for (let i = 0; i < countValue; i++) {
    this.carArray = startRacing(this.carArray);
  }
  printResult(this.carArray, printRaceResult);
  setContainerVisible("car-game-result-container", true);
}
