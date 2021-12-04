import { Car } from '../index.js'; 
import { CARS_NAME, GMAE_COUNT, NUMBER, MESSAGE, ELEMENT_ID, ELEMENT_MESSAGE } from '../utils/constant.js';
import { setGameElemetStyle } from '../utils/dom.js';

export function formEvent() {
  const allForm = document.getElementsByTagName("form");
  setGameElemetStyle(ELEMENT_MESSAGE.BEFORE_GAME);
  for (const eachForm of allForm) {
    eachForm.addEventListener("submit", (submitEvent) => {
      submitEvent.preventDefault();
      if (inputEvent(submitEvent)) {
        new Car(inputEvent(submitEvent));
      }
    })
  }
}

function inputEvent(submitEvent) {
  const allInput = document.getElementsByTagName("input");
  const inputValueArray = [];
  for (const eachInput of allInput) {
    inputValueArray.push(eachInput.value);
  }
  const inputCheckResult = inputCheck(inputValueArray, submitEvent);
  if (inputCheckResult) {
    return inputValueArray;
  }
}

function inputCheck(inputValueArray, submitEvent) {
  let gameCountCheckResult;
  if (submitEvent.target.id === ELEMENT_ID.COUNTFORM_ID) {
    gameCountCheckResult = gameCountCheck(inputValueArray[GMAE_COUNT]);
  }
  if (carNameCheck(inputValueArray[CARS_NAME]) && gameCountCheckResult) {
    setGameElemetStyle(ELEMENT_MESSAGE.COUNT_INPUT);
    return gameCountCheckResult;
  }
}

function carNameCheck(carsName) {
  let result = true;
  if (!carsName) {
    alert(MESSAGE.CARNAME_EMPTY);
    result = false;
  } else if (!carsNameLengthCheck(carsName)) {
    alert(MESSAGE.CARNMAE_OVERFIVEWORD);
    result = false;
  }
  if (result) {
    setGameElemetStyle(ELEMENT_MESSAGE.CARS_INPUT)
    return result;
  }
}

function carsNameLengthCheck(carsName) {
  let result = true;
  for (const carName of carsName.split(',')) {
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