import { Car } from '../index.js'; 
import { CARS_NAME, GMAE_COUNT, NUMBER, MESSAGE } from '../utils/constant.js'

export function formEvent() {
  const allForm = document.getElementsByTagName("form");
  for (const eachForm of allForm) {
    eachForm.addEventListener("submit", (e) => {
      const inputCheckResult = inputCheck();
      e.preventDefault();
      if (inputCheckResult) {
        new Car(inputCheckResult);
      }
    })
  }
}

function inputCheck() {
  const allInput = document.getElementsByTagName("input");
  const userInputArray = [];
  for (const eachInput of allInput) {
    userInputArray.push(eachInput.value)
  }
  const carNameCheckResult = carNameCheck(userInputArray[CARS_NAME]);
  const gameCountCheckResult = gameCountCheck(userInputArray[GMAE_COUNT]);
  if (carNameCheckResult && gameCountCheckResult) {
    return userInputArray;
  }
}

function carNameCheck(carsName) {
  const carsNameLengthCheckResult = carsNameLengthCheck(carsName);
  let result = true;
  if (!carsName) {
    alert(MESSAGE.CARNAME_EMPTY);
    result = false;
  } else if (!carsNameLengthCheckResult) {
    alert(MESSAGE.CARNMAE_OVERFIVEWORD);
    result = false;
  }

  return result;
}

function carsNameLengthCheck(carsName) {
  const carsNameArray = carsName.split(',');
  let result = true;
  for (const carName of carsNameArray) {
    if (carName.length > NUMBER.FIVE) {
      result = false;
    }
  }
  
  return result;
}

function gameCountCheck(gameCount) {
  let result = true;
  if (!gameCount) {
    alert(MESSAGE.GAMECOUNT_EMPTY);
    result = false;
  } else if (gameCount <= NUMBER.ZERO) {
    alert(MESSAGE.GAMECOUNT_UNDERONE)
    result = false;
  }

  return result;
}