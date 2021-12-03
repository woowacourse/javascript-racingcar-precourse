import { Car } from '../index.js'; 
import { CARS_NAME, GMAE_COUNT, NUMBER } from '../constants/constant.js'

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
  console.log(userInputArray);
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
    alert("자동차 이름을 입력해주세요");
    result = false;
  } else if (!carsNameLengthCheckResult) {
    alert("자동차 이름을 5자 이하로 입력해주세요");
    result = false;
  }

  return result;
}

function carsNameLengthCheck(carsName) {
  const carsNameArray = carsName.split(',');
  let result = true;
  for (const carName of carsNameArray) {
    if (carName.length > 5) {
      result = false;
    }
  }
  
  return result;
}

function gameCountCheck(gameCount) {
  let result = true;
  if (!gameCount) {
    alert("시도할 횟수를 입력해주세요");
    result = false;
  } else if (gameCount <= NUMBER.ZERO) {
    alert("0보다 큰 수를 입력해주세요")
    result = false;
  }

  return result;
}